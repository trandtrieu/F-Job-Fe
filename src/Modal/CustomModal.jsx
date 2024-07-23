// src/components/Modal.js
import React from "react";
import Modal from "react-modal";
import "../assest/css/customModal.css"; // Create this CSS file for styling if needed

Modal.setAppElement("#root"); // This is important for accessibility
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "95vh",
    overflowY: "auto",
    border: "none",
    textAlign: "center",
    zIndex: 1001,
    maxWidth: "45%",
  },
};
const CustomModal = ({ isOpen, onRequestClose, title, contentUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      //   className="modal-content"
      overlayClassName="modal-overlay"
      style={customStyles}
    >
      <button className="modal-close" onClick={onRequestClose}>
        X
      </button>
      <h2>{title}</h2>
      <img src={contentUrl} alt={title} className="modal-image" />
    </Modal>
  );
};

export default CustomModal;
