import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Modals = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <Modal
      centered
      isOpen={isOpen}
      fullscreen="md"
      size="lg"
      toggle={() => setIsOpen(!isOpen)}
    >
      <ModalHeader toggle={() => setIsOpen(!isOpen)}></ModalHeader>
      <ModalBody>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/y17RuWkWdn8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ModalBody>
    </Modal>
  );
};

export default Modals;
