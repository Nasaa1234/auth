import React from "react";
import SignIn from "./auth/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./context/useContext";
import { Home } from "@mui/icons-material";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
