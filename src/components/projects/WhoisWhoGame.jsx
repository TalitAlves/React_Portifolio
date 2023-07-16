import React, { useState } from "react";
import Modal from "../Modal";
import whoiswho from "../../images/wiw.png";
import "../Projects.css";

function WhoisWhoGame() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img
          className="project-img"
          src={whoiswho}
          alt="whos is who page"
        ></img>
        <div className="buttons-container">
          <button
            className="project-button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Project details
          </button>
          <button className="project-button">
            <a
              href="https://clever-marshmallow-363b8c.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">WhoisWho Game</h2>
            <h3 className="sub-title-project">JavaScript project</h3>
            <p className="project-info">
              This is an engaging game created with JavaScript, where the user's
              task is to guess the selected image based on the questions and
              answers provided by the game. It offers an exciting challenge that
              will put your skills and knowledge to the test.
            </p>
            <h3>Skills:</h3>
            <div className="project-skills">
              <p>🎯CSS</p>
              <p>🎯HTML</p>
              <p>🎯JavaScript</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default WhoisWhoGame;
