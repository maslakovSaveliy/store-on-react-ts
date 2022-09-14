import React, { FC, PropsWithChildren, useContext } from "react";
import { Context } from "../../../context/Context";
import { CSSTransition } from "react-transition-group";
import "../../../styles/Modal.css";
const Modal: FC<PropsWithChildren> = ({ children }) => {
  let { modalVisible, setModalVisible } = useContext(Context);
  return (
    <CSSTransition in={modalVisible} mountOnEnter unmountOnExit timeout={500}>
      <div className="modal" onClick={() => setModalVisible(false)}>
        <div onClick={(e) => e.stopPropagation()} className="modalContent">
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
export default Modal;
