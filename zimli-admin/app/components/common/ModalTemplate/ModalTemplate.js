import React, { Children, useEffect } from "react";

import style from "./Modal.module.css";

const ModalTemplate = (props) => {
  useEffect(() => {
    if (props.showModal) {
      document.body.classList.add(style.disable_scroll);
    } else {
      document.body.classList.remove(style.disable_scroll);
    }
  }, [props.showModal]);

  return (
    <div className={style.modal_overlay}>
      <div
        className="w-full h-full absolute "
        onClick={() => props.closeModal()}
      ></div>
      <div
        className={`${style.modal_container_wrapper} w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] ${props.className}`}
      >
        <div className={`${style.modal_body} `}>{props.children}</div>
      </div>
    </div>
  );
};

export default ModalTemplate;

