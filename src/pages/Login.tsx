import React, { FC, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MyButton from "../components/UI/MyButton/MyButton";
import { Context } from "../context/Context";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
interface FormData {
  email: string;
  password: string;
}
const Login: FC = () => {
  let { auth } = useContext(Context);
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  };
  /*
  const { setIsAuth } = useContext(Context);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onSubmit",
  });
  const login = (data: FormData) => {
    console.log(data);
    setIsAuth(true);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        <label>
          Email
          <input
            type="email"
            {...register("email", {
              required: "The field is empty",
              validate: {
                isInclude: (v) => v.includes("@") || "Should include @",
              },
            })}
          />
          <div>
            {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
          </div>
        </label>
        <label>
          Password
          <input
            type="password"
            {...register("password", {
              required: "The field is empty",
              minLength: {
                value: 8,
                message: "Min length 8",
              },
              maxLength: {
                value: 20,
                message: "Max length 20",
              },
            })}
          />
          <div>
            {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
          </div>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
  */
  return (
    <div>
      <MyButton onClick={login}>Login with google</MyButton>
    </div>
  );
};
export default Login;
