// VideoPopup.js
import React from "react";
import Modal from "react-modal";
import "./videoPopup.css";

const VideoPopup = ({ isOpen, onClose }) => {
  const modalStyles = {
    content: {
      marginTop:'10%',
      marginLeft: "28%",
      border: "none",
      padding: "20px",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="d-flex gap-4"
      style={modalStyles}
    >
      <iframe
        className="frame-bg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ym9zMSC1CrQ?si=DHMSgmkaomyEO3Aw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <button className="btn btn-primary " onClick={onClose}>
     Close
      </button>
    </Modal>
  );
};

export default VideoPopup;
