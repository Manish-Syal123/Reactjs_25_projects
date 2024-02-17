import React, { useState } from "react";
import Modal from "./modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const onclose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={handleToggleModal} hidden={showModal}>
        Open Modal
      </button>
      {showModal && (
        <Modal
          header={<div>Content for header</div>}
          body={<div>body content</div>}
          footer={<div>Footer part</div>}
          onclose={onclose}
        />
      )}
    </div>
  );
};

export default ModalTest;
