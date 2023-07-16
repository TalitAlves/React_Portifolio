import React, { useState } from "react";
import Modal from "../Modal";
import theMemoryGame from "../../images/TMG.jpg";
import "../Projects.css";

function TheMemoryGame() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img
          className="project-img"
          src={theMemoryGame}
          alt="The Memory Game page"
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
              href="https://symphonious-crostata-492062.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">The Memory Game</h2>
            <h3 className="sub-title-project">JavaScript project</h3>
            <p className="project-info">
              During my bootcamp, I developed a simple memory game to enhance my
              skills in CSS, JavaScript, and HTML.
            </p>
            <p className="project-info">
              The objective of the game is to find matching pairs of cards.
              Users are presented with a set of face-down cards and they have to
              flip them over to reveal the images. The challenge is to remember
              the position of each card and find its match by flipping over
              other cards. With each successful match, the cards remain face-up,
              and with each mismatch, the cards are flipped back down. The game
              continues until all the matches have been found.
            </p>
            <p className="project-info">
              This project served as a great opportunity for me to practice my
              frontend development skills while providing an entertaining and
              engaging gaming experience for users.
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

export default TheMemoryGame;
