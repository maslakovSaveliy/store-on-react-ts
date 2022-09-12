import React, { FC, useState, useEffect, useRef, RefObject } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { Context } from "./context/Context";
import "./styles/App.css";
import { IProduct } from "./types/types";
import { useAddToCard } from "./hooks/useAddToCard";
import ScrollToTopBtn from "./components/UI/scrollToTopBtn/ScrollToTopBtn";
import { useObserver } from "./hooks/useObserver";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
initializeApp(config.firebaseConfig);
const App: FC = () => {
  const [cardArr, price, addItem, removeItem] = useAddToCard();
  const [category, setCategory] = useState<string>("");
  const [toTopBtn, setToTopBtn] = useState(false);
  const auth = getAuth();
  const [user, isLoading, error] = useAuthState(auth);
  const firstElement = useRef<HTMLDivElement>(null);
  useObserver(setToTopBtn, firstElement);
  useObserver(setToTopBtn, firstElement);
  return (
    <Context.Provider
      value={{
        cardArr,
        price,
        addItem,
        removeItem,
        category,
        setCategory,
        auth,
        user,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <div ref={firstElement}></div>
          <Navbar />
          {isLoading ? <h1>Loading...</h1> : <AppRouter />}
          <ScrollToTopBtn visible={toTopBtn} />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};
export default App;
