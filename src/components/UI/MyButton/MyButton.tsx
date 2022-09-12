import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import style from "./MyButton.module.css";
const MyButton: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={style.MyButton}>
      {children}
    </button>
  );
};
export default MyButton;
