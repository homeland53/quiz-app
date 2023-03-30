import { useGlobalContext } from "../Context/Context";

const Modal = () => {
  const { modal, closeModal, correct, questions } = useGlobalContext();
  const percentage = ((correct / questions.length) * 100).toFixed(0);

  let message;
  if (correct === 0) {
    message = "Sorry! No correct answers.";
  } else {
    message = `Congratulations! You answered ${percentage}% of the questions correctly.`;
  }

  return (
    <div className={`${modal ? "modal-container isOpen" : "modal-container"}`}>
      <div className="modal-content">
        <p>{message}</p>
        <button className="close-btn" onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;