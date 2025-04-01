import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/SkillsCarousel.css";
import ShecodesBasic from "../images/ShecodesBasic.jpg";
import ShecodesPlus from "../images/ShecodesPlus.jpg";
import ShecodesReact from "../images/ShecodesReact.png";
import ShecodesResponsive from "../images/ShecodesResponsive.png";
import Bootcamp from "../images/Bootcamp.png";

function SkillsCarousel() {
  return (
    <Carousel className="carousel">
    <div>
        <img src={Bootcamp} alt="Certificate Bootcamp Upgrade-hub" />
      </div>
      <div>
        <img src={ShecodesReact} alt="Certificate SheCodes React" />
      </div>
      <div>
        <img src={ShecodesResponsive} alt="Certificate SheCodes Responsive" />
      </div>
      <div>
        <img src={ShecodesPlus} alt="Certificate SheCodes Plus" />
      </div>
      <div>
        <img src={ShecodesBasic} alt="Certificate SheCodes Basic" />
      </div>
    </Carousel>
  );
}

export default SkillsCarousel;
