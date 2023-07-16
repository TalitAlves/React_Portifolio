import React, { useState } from "react";
import Modal from "../Modal";
import whackAdiglett from "../../images/wad.jpg";
import "../Projects.css";

function WhackADiglett() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img
          className="project-img"
          src={whackAdiglett}
          alt="Whack-A-Mole"
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
              href="https://astounding-crostata-a08ffe.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">Whack-A-Diglett Game</h2>
            <h3 className="sub-title-project">JavaScript project</h3>
            <p className="project-info">
              This game is an exciting whack-a-mole experience where the
              objective is simple: click on the Digletts as they pop up to earn
              points.
            </p>
            <p className="project-info">
              Built entirely in JavaScript, the game offers a responsive and
              interactive interface that ensures smooth gameplay
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

export default WhackADiglett;
