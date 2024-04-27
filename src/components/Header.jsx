import { useState } from "react";
import Modal from "./Modal";

export default function Header() {
  const [dialog, setDialog] = useState(false);

  function handleOpen() {
    setDialog(true);
  }

  function handleClose() {
    setDialog(false);
  }

  return (
    <div className="flex justify-between mt-5 mb-5">
      <h2 className="text-4xl ml-5">Triatlon Blog</h2>
      <button
        className="text-xl mr-10 border-2 px-4 py-1 rounded-md"
        onClick={() => handleOpen()}
      >
        Sign In
      </button>
      {dialog && (
        <Modal
          open={dialog}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
