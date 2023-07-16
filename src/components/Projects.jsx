import React from "react";
import "./Projects.css";
import Dictionary from "./projects/Dictionary";
import CocktailParty from "./projects/CocktailParty";
import ToDoList from "./projects/ToDoListApp";
import WeatherApp from "./projects/WeatherApp";
import WhackADiglett from "./projects/WhackADiglett";
import WhoisWhoGame from "./projects/WhoisWhoGame";
import EcommerceDrinks from "./projects/EcommerceDrinks";
import Pokedex from "./projects/Pokedex";
import TheMemoryGame from "./projects/TheMemoryGame";

const Projects = () => {
  return (
    <div>
      <div className="title">My projects</div>
      <div className="projects-container">
        <Dictionary />
        <CocktailParty />
        <ToDoList />
        <WeatherApp />
        <WhackADiglett />
        <WhoisWhoGame />
        <Pokedex />
        <EcommerceDrinks />
        <TheMemoryGame />
      </div>
    </div>
  );
};

export default Projects;
