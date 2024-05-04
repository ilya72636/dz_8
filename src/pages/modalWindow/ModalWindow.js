import React from 'react';
import { useModal } from '../../context/ModalContext';
import s from './modal.module.css';

const ModalWindow = () => {
  const { isModalOpen, closeModal } = useModal();

  const modalContainerStyle = {
    display: isModalOpen ? 'flex' : 'none',
  };

  return (
    <div style={modalContainerStyle} className={s.modalContainer}>
      <div className={s.modalContent}>
        <h2>Модальное окно</h2>
        <p>Содержимое модального окна...</p>
        <button onClick={closeModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default ModalWindow;
