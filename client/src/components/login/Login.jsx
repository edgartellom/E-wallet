import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "firebase/app";
import "firebase/auth";
import { app, auth, db, storage } from "../../fireBase/firebase";
//import { useFirebaseApp } from 'reactfire'
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
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  console.log(storage);
  ///////////REGISTER//////

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      //store user data in firestore database
      try {
        const userDoc = doc(db, "users", user.uid);
        await setDoc(userDoc, {
          id: user.uid,
          username,
          admin: false,
          email: email,
        });
        console.log(user);
      } catch (error) {
        console.log(error);
      }

      setMessage("Usuario creado");

      toast.success("Account created");
      //navigate("/products");
      window.location.href = "/";
    } catch (error) {
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
      setUser(userCredential.user);
      //navigate("/products");
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
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesiÃ³n", error);
      setError(error.message);
    }
  };

  //////LOGIN GOOGLE/////

  // const handleOnClick = async () => {
  //   const googleProvider = new GoogleAuthProvider();
  //   await singInWithGoogle(googleProvider);
  // };
  // async function singInWithGoogle(googleProvider) {
  //   try {
  //     const res = await signInWithPopup(auth, googleProvider);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleOnClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      {user !== null ? (
        <button
          type="button"
          className="btn btn-outline-dark"
          data-bs-toggle="modal"
          data-bs-target="#logout"
          onClick={handleSignOut}>
          Logout
        </button>
      ) : (
        <div>
          <div className="d-inline-block mx-2">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#signinModal">
              Signin
            </button>
          </div>
          <div className="d-inline-block mx-2">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#signupModal">
              Signup
            </button>
          </div>

          <div
            className="modal fade"
            id="signinModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
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
                    aria-label="Close"></button>
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
                        onClick={handleOnClick}>
                        Login with Google
                      </button>
                    </div>

                    {/* <button type='submit' className='btn btn-secondary btn-block' >
                                                Login
                                            </button>
                                            <button type='button' className='btn btn-info btn-block' >
                                                Login with Google
                                            </button> */}
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
            aria-hidden="true">
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
                    aria-label="Close"></button>
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
