import React, { FC } from "react";
import "../../../styles/ScrollToTop.css";
const ScrollToTop: FC = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={scrollToTop} className="ScrollToTop">
      Scroll Up
    </div>
  );
};
export default ScrollToTop;
