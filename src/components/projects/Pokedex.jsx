import React, { useState } from "react";
import Modal from "../Modal";
import pokedexApp from "../../images/Pokedex.jpg";
import "../Projects.css";

function Pokedex() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img className="project-img" src={pokedexApp} alt="Pokedex page"></img>
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
              href="https://incomparable-meringue-547339.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">Pokedex</h2>
            <h3 className="sub-title-project">JavaScript project</h3>
            <p className="project-info">
              The Pokedex page is a project that I created during my bootcamp.
            </p>
            <p className="project-info">
              It is a comprehensive application where users can explore a list
              of 150 Pokémon and even save their favorite ones. The app utilizes
              an API call to retrieve the Pokémon data and present it in a
              user-friendly format. With the search functionality, users can
              easily find specific Pokémon by name.
            </p>
            <p className="project-info">
              Additionally, the app allows users to create a personal favorites
              list, making it convenient to keep track of the Pokémon they love
              the most
            </p>

            <h3>Skills:</h3>
            <div className="project-skills">
              <p>🎯CSS</p>
              <p>🎯HTML</p>
              <p>🎯JavaScript</p>
              <p>🎯REST API</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Pokedex;
