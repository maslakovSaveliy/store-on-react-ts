import React, { FC } from "react";
import "../../../styles/ScrollToTop.css";
interface ScrollToTopBtnProps {
  visible: boolean;
}
const ScrollToTopBtn: FC<ScrollToTopBtnProps> = ({ visible }) => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div style={{ position: "absolute", bottom: "0" }}>
      {visible && (
        <div className="ScrollToTop" onClick={scrollToTop}>
          SCROLL UP
        </div>
      )}
    </div>
  );
};
export default ScrollToTopBtn;
