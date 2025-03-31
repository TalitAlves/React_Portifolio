import React from "react";

import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer-paragraph">
        This project was coded by{" "}
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/talitaalvesgomes/"
        >
          Talita Alves
        </a>
        , and it is{" "}
        <a
          className="footer-link"
          href="https://github.com/TalitAlves/portifolio-SheCodes"
        >
          open-sorced
        </a>
      </p>
      <div className="email">talitagalves@gmail.com</div>
    </footer>
  );
}

export default Footer;
