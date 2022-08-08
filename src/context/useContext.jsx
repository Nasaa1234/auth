import React, { useContext, createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext({
  user: {},
  SignIn: () => {},
  SignUp: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [error, setError] = useState({
    signIn : "",
    signUp: ""
  })

  const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((req) => console.log("req",req));
  };
  const SignUp = (email, password) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((el) => console.log(el));
  };
  return (
    <AuthContext.Provider value={{ user, SignIn, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
