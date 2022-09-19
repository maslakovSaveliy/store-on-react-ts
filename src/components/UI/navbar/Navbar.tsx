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
      {menuVisible && (
        <div
          onClick={() => setMenuVisible(false)}
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: "-2",
          }}
        ></div>
      )}
      <div className="navbarM">
        {menuVisible && (
          <>
            <div className="menu__open">
              <div className="menu__content">
                <div className="menu__item">
                  <NavLink
                    onClick={() => setMenuVisible(false)}
                    to="/"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "gray", cursor: "default" }
                        : { color: "black", cursor: "pointer" }
                    }
                  >
                    <h3>Home</h3>
                  </NavLink>
                </div>
                <div className="menu__item">
                  <NavLink
                    onClick={() => setMenuVisible(false)}
                    to="/categories"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "gray", cursor: "default" }
                        : { color: "black", cursor: "pointer" }
                    }
                  >
                    <h3>Products</h3>
                  </NavLink>
                </div>
                <div className="menu__item">
                  <NavLink
                    onClick={() => setMenuVisible(false)}
                    to="/card"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "gray", cursor: "default" }
                        : { color: "black", cursor: "pointer" }
                    }
                  >
                    {cardArr.length == 0 ? (
                      <h3>0 $</h3>
                    ) : (
                      <h3>{price.toFixed(2)} $</h3>
                    )}
                  </NavLink>
                </div>
                <div className="menu__item">
                  <MyButton onClick={() => setModalVisible(true)}>
                    <h2>Request an item</h2>
                  </MyButton>
                </div>
                <div className="menu__item">
                  <MyButton
                    onClick={() => {
                      auth.signOut();
                      setMenuVisible(false);
                    }}
                  >
                    <h2>Logout</h2>
                  </MyButton>
                </div>
              </div>
            </div>
          </>
        )}
        {menuVisible ? (
          <div
            className="menu__btn"
            onClick={() => {
              setMenuVisible((menuVisible) => !menuVisible);
            }}
          >
            &#10006;
          </div>
        ) : (
          <div
            className="menu__btn"
            onClick={() => {
              setMenuVisible((menuVisible) => !menuVisible);
            }}
          >
            <div className="menuImg"></div>
            <div className="menuImg"></div>
            <div className="menuImg"></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
