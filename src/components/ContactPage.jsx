import React from "react";
import photo from "../images/retrato2.jpg";

function ContactPage() {
  return (
    <div>
      <h4 className="title">📭 Let's get in touch!</h4>
      <div className="contact-page">
        <div className="container-img">
          <img
            src={photo}
            alt=" Talita Alves"
            className="img-fluid p-2 shadow-sm"
          />
        </div>

        <div className="contact">
          <p>
            📮 <strong> email</strong> talitagalves91@gmail.com
          </p>
          <p>
            📞 <strong>phone</strong>: +34 681 611 007
          </p>
          <p>
            🔗 <strong>linkedInn</strong>:{" "}
            <a
              href="https://www.linkedin.com/in/talitaalvesgomes/"
              target="_blank"
              rel="noreferrer"
            >
              @talitaalvesgomes
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
