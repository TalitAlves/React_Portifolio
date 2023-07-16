import React from "react";
import "./Modal.css";

function Modal({ children, isOpen, setIsOpen }) {
  if (!isOpen) return null;
  return (
    <div className="page">
      <div className="modal-container">
        <button
          className="modal-close"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
