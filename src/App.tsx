import React, { FC, useState, useEffect, useRef, RefObject } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import { Context } from "./context/Context";
import "./styles/App.css";
import { useAddToCard } from "./hooks/useAddToCard";
import { useObserver } from "./hooks/useObserver";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Modal from "./components/UI/Modal/Modal";
import AddItem from "./components/RequestItem";
import ScrollToTop from "./components/UI/ScrollToTop/ScrollToTop";
import { CSSTransition } from "react-transition-group";
initializeApp(config.firebaseConfig);
const App: FC = () => {
  const [cardArr, setCardArr, price, addItem, removeItem] = useAddToCard();
  const [toTopBtn, setToTopBtn] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const auth = getAuth();
  const [user, isLoading, userError] = useAuthState(auth);
  const firstElement = useRef<HTMLDivElement>(null);
  useObserver(setToTopBtn, firstElement);
  return (
    <Context.Provider
      value={{
        cardArr,
        price,
        addItem,
        removeItem,
        auth,
        user,
        modalVisible,
        setModalVisible,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <div ref={firstElement}></div>
          <Navbar />
          {isLoading ? (
            <h1>Loading...</h1>
          ) : userError ? (
            <h1 style={{ color: "red" }}>{userError.message}</h1>
          ) : (
            <AppRouter />
          )}
          <CSSTransition in={toTopBtn} timeout={500} mountOnEnter unmountOnExit>
            <ScrollToTop />
          </CSSTransition>
          <Modal>
            <AddItem />
          </Modal>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};
export default App;
