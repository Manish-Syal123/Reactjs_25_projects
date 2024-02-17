import React from "react";
import "./modal.css";
const Modal = ({ id, header, body, footer, onclose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          {/* {header && header} */}
          {header ? header : "Header"}
          <span className="close-modal-icon" onClick={onclose}>
            &times;
          </span>
        </div>
        <div className="body">
          {/* {body && body} */}
          {body ? body : "Body"}
        </div>
        <div className="footer">
          {footer && footer}
          {body ? body : "Body"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
