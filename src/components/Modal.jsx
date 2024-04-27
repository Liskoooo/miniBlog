import { useRef, useState } from "react";
import axios from "axios";
import LogInForm from "./LogIn";
import RegisterForm from "./RegisterForm";

export default function Modal({ open, handleOpen, handleClose }) {
  const [modal, setModal] = useState({ type: "log-in" });

  async function handleLogIn(email, password) {
    try {
      const res = await axios.post("http://localhost:4000/LogIn", {
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  }

  function handleChange() {
    setModal((prevState) => {
      return {
        ...prevState,
        type: "register",
      };
    });
  }

  function handleChange2() {
    setModal((prevState) => {
      return {
        ...prevState,
        type: "log-in",
      };
    });
  }

  return (
    <dialog open={open} handleOpen={handleOpen}>
      {modal.type === "log-in" ? (
        <LogInForm
          changeModalType={handleChange}
          closeIt={handleClose}
          handleLogin={handleLogIn}
        />
      ) : (
        <RegisterForm onCancel={handleChange2} />
      )}
    </dialog>
  );
}
