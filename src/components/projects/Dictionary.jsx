import React, { useState } from "react";
import Modal from "../Modal";
import dicionaryApp from "../../images/dictionary.png";
import "../Projects.css";

const Dictionary = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="project-container">
      <img
        className="project-img"
        src={dicionaryApp}
        alt="dictionary page"
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
            href="https://superb-palmier-8c6881.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Launch project
          </a>
        </button>
      </div>

      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <div>
          <h2 className="project-title">Dictionary App</h2>

          <p className="project-info">
            My last project as SheCode student, it is a Dictionary App that
            allows you to search any word in English.
          </p>
          <p className="project-info">
            The dictionary provides the meaning, word phonetic and photos.
          </p>
          <p className="project-info">
            To test my skills I also added the option to search for Portuguese
            words, using another API. In this project I improved my skills in
            React, use of APIs and JavaScript features.
          </p>
          <p className="project-info">
            The page includes a search engine and API integration.
          </p>
          <h3>Skills:</h3>
          <div className="project-skills">
            <p>🎯CSS</p>
            <p>🎯HTML</p>
            <p>🎯JavaScript</p>
            <p>🎯React</p>
            <p>🎯REST API</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dictionary;
