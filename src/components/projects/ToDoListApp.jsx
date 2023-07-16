import React, { useState } from "react";
import Modal from "../Modal";
import listApp from "../../images/ToDoList.jpg";
import "../Projects.css";

function ToDoListApp() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="project-container">
        <img className="project-img" src={listApp} alt="ToDo List App"></img>
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
              href="https://stellar-meerkat-b8d131.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Launch project
            </a>
          </button>
        </div>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <div>
            <h2 className="project-title">Todo List App</h2>
            <h3 className="sub-title-project">JavaScript project</h3>
            <p className="project-info">
              During my boot camp, I created a simple page to enhance my CSS and
              JavaScript skills. The page allows users to add tasks to a list
              and mark them as complete.
            </p>
            <p className="project-info">
              It provides a user-friendly interface where tasks can be easily
              added and managed. Users can input task descriptions and click a
              button to add them to the list. Once a task is completed, users
              have the option to delete it
            </p>
            <p className="project-info">
              This project served as an effective way to improve my CSS styling
              abilities and practice JavaScript functionality, while also
              offering a practical solution for managing and organizing tasks.
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

export default ToDoListApp;
