import React from "react";
import { useAuthContext } from "../context/useContext";

const Home = () => {
  const { user } = useAuthContext();
  return <div>{user}</div>;
};

export default Home;
