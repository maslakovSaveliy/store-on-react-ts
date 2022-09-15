import React, { FC, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/Context";
import "../../../styles/Navbar.css";
import MyButton from "../MyButton/MyButton";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar: FC = () => {
  let { cardArr, price, auth, setModalVisible } = useContext(Context);
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="head">
      <nav className="navbar">
        <div className="navbar__content">
          <div className="navbar__item">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { color: "gray", cursor: "default" }
                  : { color: "black", cursor: "pointer" }
              }
            >
              Home
            </NavLink>
          </div>
          <div className="navbar__item">
            <NavLink
              to="/categories"
              style={({ isActive }) =>
                isActive
                  ? { color: "gray", cursor: "default" }
                  : { color: "black", cursor: "pointer" }
              }
            >
              Products
            </NavLink>
          </div>
          <div className="navbar__item">
            <NavLink
              to="/card"
              style={({ isActive }) =>
                isActive
                  ? { color: "gray", cursor: "default" }
                  : { color: "black", cursor: "pointer" }
              }
            >
              {cardArr.length == 0 ? <>0 $</> : <>{price.toFixed(2)} $</>}
            </NavLink>
          </div>
          <div className="navbar__item">
            <MyButton onClick={() => setModalVisible(true)}>
              Request an item
            </MyButton>
          </div>
          <div className="navbar__item">
            <MyButton onClick={() => auth.signOut()}>Logout</MyButton>
          </div>
        </div>
      </nav>
      <div className="menu">
        <div
          className="menu__btn"
          onClick={() => {
            setMenuVisible((menuVisible) => !menuVisible);
          }}
        ></div>
        {menuVisible && <div className="menu__item"></div>}
      </div>
    </div>
  );
};
export default Navbar;
