import React, { useState } from "react";

import "../projects/VideoProject.css"

function VideoProject({videoSrc, projectLink, projectTitle, description, skill }) {
    
   
        const[showInfo, setShowInfo] = useState(false)
    
  
  return (
    
      <div className="videoProject"
       onMouseEnter={()=>setShowInfo(true)}
       onMouseLeave={()=>setShowInfo(false)}>
        <video width={400} autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />

        </video>

        {showInfo &&(
            <div className="box">
            <div className="project-info2">
               <h2><a href={projectLink} target="blank">{projectTitle}</a></h2>
                <p>{description} </p>
                <div>
              {skill.map((tech, index) => (
                <button key={index} className="tec-skills">
                  {tech}
                </button>
              ))}
            </div>
               

            </div>

            </div>
        )}
                
         
           
       
    </div>
  );
}

export default VideoProject;
