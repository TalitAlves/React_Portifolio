import React, { useState } from "react";
import Modal from "../Modal";
import weatherApp from "../../images/new-weather-app.png";
import "../Projects.css";

function WeatherApp() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img className="project-img" src={weatherApp} alt="Weather page"></img>
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
              href="https://marvelous-blancmange-091838.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">Weather App</h2>
            <h3 className="sub-title-project">React project</h3>
            <p className="project-info">
              My second project is a Weather App where you can find real-time
              weather from any city in the world.
            </p>
            <p className="project-info">
              I improve my skills using Javascript, CSS and started on the path
              of learning React.
            </p>
            <p className="project-info">
              The project includes a search engine, API integration and live
              data.
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
    </div>
  );
}

export default WeatherApp;
