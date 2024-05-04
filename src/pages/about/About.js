import React from 'react';
import { useModal } from '../../context/ModalContext';
import ModalWindow from '../modalWindow/ModalWindow';

const About = () => {
  const { isModalOpen } = useModal();

  return (
    <div>
      <h1>О нас</h1>
      {isModalOpen && <ModalWindow />}
    </div>
  );
};

export default About;   