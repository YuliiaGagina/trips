import React, { useState } from 'react';

import Modal from 'react-modal';
import TravelForm from './../TravelForm/TravelForm';
import { AddButton, FlexCont } from './CreateTrip.styled';
import { IoMdAdd } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const CreateTrip = () => {
  let subtitle;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#4798b0';
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <div>
        <AddButton onClick={openModal}>
          <span> add trip</span>

          <IoMdAdd />
        </AddButton>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FlexCont>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add your new trip!</h2>
          <button onClick={closeModal}>
            <IoCloseOutline />
          </button>
        </FlexCont>

        <TravelForm />
      </Modal>
    </div>
  );
};

export default CreateTrip;
