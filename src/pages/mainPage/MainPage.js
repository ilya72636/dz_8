import React from 'react';
import { useModal } from '../../context/ModalContext';


const MainPage = () => {
  const { openModal } = useModal();

  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={openModal}>Открыть модальное окно</button>
    </div>
  );
};

export default MainPage;