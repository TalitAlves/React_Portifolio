import React from "react";
import "./Skills.css";
import api from "../images/api.jpg";
import bootstrap from "../images/bootstrap.jpg";
import css from "../images/css.jpg";
import editor from "../images/editor.jpg";
import github from "../images/github.jpg";
import holsting from "../images/holsting.jpg";
import html from "../images/html.jpeg";
import javascript from "../images/java.jpg";
import react from "../images/react.png";
import angular from "../images/angular.png";

function Skills() {
  return (
    <div>
      <div className="skills-grid">
        <div className="grid-iten">
          <img className="skill-logo" src={html} alt="html logo" />
          <h4 className="skill-item">HTML</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={css} alt="css logo" />
          <h4 className="skill-item">CSS</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={javascript} alt="javascript logo" />
          <h4 className="skill-item">JavaScript</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={react} alt="react logo" />
          <h4 className="skill-item">React</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={github} alt="github logo" />
          <h4 className="skill-item">GitHub</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={editor} alt="editor logo" />
          <h4 className="skill-item">Editor</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={holsting} alt="netfly logo" />
          <h4 className="skill-item">Holsting</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={api} alt="api logo" />
          <h4 className="skill-item">REST API</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={bootstrap} alt="bootstrap logo" />
          <h4 className="skill-item">Bootstrap</h4>
        </div>
        <div className="grid-iten">
          <img className="skill-logo" src={angular} alt="angular logo" />
          <h4 className="skill-item">Angular</h4>
        </div>
      </div>
    </div>
  );
}

export default Skills;
