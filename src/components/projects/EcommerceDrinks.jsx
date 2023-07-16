import React, { useState } from "react";
import Modal from "../Modal";
import ecommercePage from "../../images/e-commercePage.png";
import "../Projects.css";

function EcommerceDrinks() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img
          className="project-img"
          src={ecommercePage}
          alt="Tienda Drinks"
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
              href="https://stellar-tanuki-ac0596.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">E-commerce Page</h2>
            <h3 className="sub-title-project">JavaScript project</h3>
            <p className="project-info">
              During the bootcamp, I created a simple e-commerce simulation
              page.
            </p>
            <p className="project-info">
              It allows users to search for their desired drinks, select the
              ones they want to add to their basket, and visualize all the items
              in the basket. Once the selection is complete, users can proceed
              to the checkout process and "finish" their purchase. At the end of
              the transaction, users can view a summary of all the items they
              have purchased.
            </p>
            <p className="project-info">
              This page provides a hands-on experience of a typical e-commerce
              flow, enabling users to explore, select, and finalize their drink
              purchases in a convenient and user-friendly manner.
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

export default EcommerceDrinks;
