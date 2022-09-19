import React, { FC, PropsWithChildren, useContext } from "react";
import { Context } from "../../../context/Context";
import { CSSTransition } from "react-transition-group";
import "../../../styles/Modal.css";
import MyButton from "../MyButton/MyButton";
const Modal: FC<PropsWithChildren> = ({ children }) => {
  let { modalVisible, setModalVisible } = useContext(Context);
  return (
    <CSSTransition in={modalVisible} mountOnEnter unmountOnExit timeout={500}>
      <div className="modal" onClick={() => setModalVisible(false)}>
        <div onClick={(e) => e.stopPropagation()} className="modalContent">
          <button
            onClick={() => setModalVisible(false)}
            className="close__modal"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
export default Modal;
