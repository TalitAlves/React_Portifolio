import React from "react";
import "./Projects.css";
import Dictionary from '../../videos/Dictionary.mp4';
import ToDoList from "../../videos/ToDoList.mp4";
import WeatherApp from "../../videos//WeatherApp.mp4";
import WhackADigglett from "../../videos/WhackADigglett.mp4";
import WhoisWhoGame from "../../videos/WhoIsWho.mp4";
import EcommerceDrinks from "../../videos/EcommerceDrinks.mp4";
import Pokedex from "../../videos/Pokedex.mp4";
import TheMemoryGame from "../../videos/MemoryGame.mp4";
import VideoProject from "./VideoProject";
import BookstoreVideo from '../../videos/Bookstore.mp4'

const Projects = () => {
  return (
    <div>
       <h1 className="tittle">My projects</h1>
   
    <div className="project-container">
   

    <VideoProject
        videoSrc={BookstoreVideo}
        projectLink={"https://bookstorer.netlify.app/#"}
        projectTitle={"Bookshelf Assistant"}
        description={"A page to find our favorite books and save them"}
        skill={["CSS", "React", "Context API", "JSON Server"]}
        
      >
        {" "}
      </VideoProject>

      <VideoProject
        videoSrc={EcommerceDrinks}
        projectLink={"https://stellar-tanuki-ac0596.netlify.app/"}
        projectTitle={"e-Commerce Drinks"}
        description={" A e-commerce simulation page."}
        skill={["CSS", "HTML", "REST API", "JavaScript"]}
        
      >
        {" "}
      </VideoProject>


      <VideoProject
        videoSrc={Pokedex}
        projectLink={"https://incomparable-meringue-547339.netlify.app/"}
        projectTitle={"Pokedex"}
        description={"A page to explore 150 Pokémon and save favorites."}
        skill={["CSS", "HTML", "JavaScript"," REST API"]}
        
      >
        {" "}
      </VideoProject>

      <VideoProject
        videoSrc={WeatherApp}
        projectLink={"https://marvelous-blancmange-091838.netlify.app/"}
        projectTitle={"Weather App"}
        description={"Real-time weather from any city in the world."}
        skill={["CSS", "HTML", "JavaScript"," REST API", "React"]}
        
      >
        {" "}
      </VideoProject>

      <VideoProject
        videoSrc={ToDoList}
        projectLink={"https://stellar-meerkat-b8d131.netlify.app/"}
        projectTitle={"To Do List"}
        description={"A page  to add tasks to a list and mark them as complete."}
        skill={["CSS", "HTML", "JavaScript"]}
        
      >
        {" "}
      </VideoProject>

      

      <VideoProject
        videoSrc={Dictionary}
        projectLink={"https://superb-palmier-8c6881.netlify.app/"}
        projectTitle={"Dictionary"}
        description={"The dictionary provides the meaning, word phonetic and photos"}
        skill={["CSS", "HTML", "React", "REST API", "JavaScript"]}
        
      >
        {" "}
      </VideoProject>

      <VideoProject
        videoSrc={TheMemoryGame}
        projectLink={"https://symphonious-crostata-492062.netlify.app/"}
        projectTitle={"The Memory Game"}
        description={"The objective of the game is to find matching pairs of cards"}
        skill={["CSS", "HTML", "JavaScript"]}
        
      >
        {" "}
      </VideoProject>


      <VideoProject
        videoSrc={WhoisWhoGame}
        projectLink={"https://clever-marshmallow-363b8c.netlify.app/"}
        projectTitle={"Who is Who Game"}
        description={"A game where players guess an image through questions."}
        skill={["CSS", "HTML", "JavaScript"]}
        
      >
        {" "}
      </VideoProject>



      <VideoProject
        videoSrc={WhackADigglett}
        projectLink={"https://astounding-crostata-a08ffe.netlify.app/"}
        projectTitle={"WHACK A DIGLETT!"}
        description={"An exciting whack-a-mole experience."}
        skill={["CSS", "HTML", "JavaScript"]}
        
      >
        {" "}
      </VideoProject>
      

</div>
 </div>
      
  );
};

export default Projects;
