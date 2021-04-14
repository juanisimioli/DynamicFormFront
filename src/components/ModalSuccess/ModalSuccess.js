import PropTypes from "prop-types";
import style from "./modalSuccess.module.scss";

const ModalSuccess = ({ isModalOpen, setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className={style.container}>
          <div className={style.content}>
            <span className={style.close} onClick={closeModal}>
              &times;
            </span>
            <p className={style.message}>
              👌 The form was submitted successfully 👌
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSuccess;

ModalSuccess.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
