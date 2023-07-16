import React, { useState } from "react";
import Modal from "../Modal";
import cocktailParty from "../../images/cp.jpg";
import "../Projects.css";

function CocktailParty() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img
          className="project-img"
          src={cocktailParty}
          alt="cocktail party page"
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
              href="https://github.com/TalitAlves/Drinks-Page"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">Cocktail Party</h2>

            <p className="project-info">
              This cocktail page has been developed using Angular. It enables
              users to search for a wide range of drinks by name, and it also
              offers the feature of allowing users to create their own custom
              cocktails.
            </p>
            <p className="project-info">
              The page leverages an API to provide an extensive database of
              cocktails, including detailed information such as ingredients and
              preparation instructions. Additionally, a JSON server has been
              implemented to enable the saving and editing of the cocktails
              created by users.
            </p>

            <h3>Skills:</h3>
            <div className="project-skills">
              <p>🎯CSS</p>
              <p>🎯HTML</p>
              <p>🎯Typescript</p>
              <p>🎯Angular</p>
              <p>🎯Json server</p>
              <p>🎯REST API</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default CocktailParty;
