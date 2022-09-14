import React, { FC, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MyButton from "../components/UI/MyButton/MyButton";
import { Context } from "../context/Context";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login: FC = () => {
  let { auth } = useContext(Context);
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    localStorage.setItem("email", user.email ? user.email : "");
  };
  return (
    <div>
      <MyButton onClick={login}>Login with google</MyButton>
    </div>
  );
};
export default Login;
