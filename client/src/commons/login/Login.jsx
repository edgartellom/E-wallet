import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "firebase/app";
import "firebase/auth";

import { app, auth, db, storage } from "../../FireBase/Firebase";
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
} from "firebase/auth";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("usuario creado");
      setMessage("Usuario creado");
      window.location.href = "/";
    } catch (error) {
      setError(error.message);
    }
  };

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
      window.location.href = "/";
    } catch (error) {
      console.error("Sign in failed!", error);
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      setError(error.message);
    }
  };

  const handleOnClick = async () => {
    const googleProvider = new GoogleAuthProvider();
    await singInWithGoogle(googleProvider);
  };
  async function singInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {user !== null ? (
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
                        {" "}
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
