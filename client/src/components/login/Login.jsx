import React, { useState, useEffect } from "react";
import "firebase/app";
import "firebase/auth";
import { db } from "../../fireBase/firebase";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  fetchSignInMethodsForEmail,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../../redux/slices/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState(null);

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            id: user.uid,
            username: username,
            email: user.email,
            admin: false,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  ///////////REGISTER//////

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const createdUser = userCredential.user;

      //store user data in firestore database
      try {
        const userDoc = doc(db, "users", createdUser.uid);
        await setDoc(userDoc, {
          id: createdUser.uid,
          username: username,
          admin: false,
          email: email,
        });
      } catch (error) {
        console.log(error);
      }
      const newUser = {
        id: createdUser.uid,
        username: username,
        email: createdUser.email,
        admin: false,
      };
      dispatch(setUser(newUser));
      await axios.post("/users", newUser);

      console.log(createdUser); //Link to back-end (create user)

      setMessage("Usuario creado");

      toast.success("Account created");
      navigate("/products");
      //window.location.href = "/";
    } catch (error) {
      console.error("Error al realizar la solicitud POST", error);
      toast.error("something wrong");
      setError(error.message);
    }
  };

  //////LOGIN/////

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const providers = await fetchSignInMethodsForEmail(auth, emailLogin);
      if (providers.length === 0) {
        setError("Email address not registered. Please sign up.");
        return;
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailLogin,
        passwordLogin
      );
      // Usar el estado local del usuario para actualizar el estado global
      dispatch(
        setUser({
          id: userCredential.user.uid,
          username: username,
          email: userCredential.user.email,
          admin: false,
        })
      );

      window.location.href = "/";
    } catch (error) {
      console.error("Sign in failed!", error);
      setError(error.message);
    }
  };

  ////SINGOUT/////

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Limpiar el estado global del usuario
      dispatch(clearUser());
      //setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesion", error);
      setError(error.message);
    }
  };

  //////LOGIN GOOGLE/////

  const handleOnClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      {userState?.id ? (
        <button
          type="button"
          className="btn btn-outline-dark"
          data-bs-toggle="modal"
          data-bs-target="#logout"
          onClick={handleSignOut}
        >
          Logout
        </button>
      ) : (
        <div>
          <div className="d-inline-block mx-2">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#signinModal"
            >
              Signin
            </button>
          </div>
          <div className="d-inline-block mx-2">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Signup
            </button>
          </div>

          <div
            className="modal fade"
            id="signinModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Signin
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit} id="login-form">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email"
                      required
                      id="emailLogin"
                      value={emailLogin}
                      onChange={(event) => setEmailLogin(event.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control mb-3"
                      placeholder="******"
                      required
                      id="passwordLogin"
                      value={passwordLogin}
                      onChange={(event) => setPasswordLogin(event.target.value)}
                    />
                    <div className="d-grid gap-2">
                      <button className="btn btn-secondary" type="submit">
                        Login
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleOnClick}
                      >
                        Login with Google
                      </button>
                    </div>
                    {error && <p>{error}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="signupModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Signup
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleFormSubmit} id="signup-form">
                    <label htmlFor="email">UserName:</label>
                    <input
                      className="form-control mb-3"
                      placeholder="UserName"
                      type="text"
                      id="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                      className="form-control mb-3"
                      placeholder="Email"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                      className="form-control mb-3"
                      placeholder="******"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    {error && <p>{error}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
