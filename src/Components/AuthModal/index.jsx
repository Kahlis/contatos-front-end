import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { ModalBackground } from "./style";
function Modal({ type, closeModal, setType }) {
    return (
        <>
            <ModalBackground
                onClick={() => {
                    closeModal();
                }}
            />
            {type === "Login" ? (
                <LoginModal closeModal={closeModal} setType={setType} />
            ) : (
                <RegisterModal closeModal={closeModal} setType={setType} />
            )}

            <ToastContainer />
        </>
    );
}

export default Modal;
