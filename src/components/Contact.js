import React, { useState } from "react";
import "../cssComponents/Faqs.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
function Contact() {
  const [click, setClick] = useState("Get In Touch");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [btnActive, setBtnActive] = useState(false);

  function dataHandler(e) {
    e.preventDefault();
    console.log(name, email, message);
    if (!name || !email || !message) {
      setClick("Enter Valid Info");
      setTimeout(() => {
        setClick("Get In Touch");
      }, 3000);
    } else {
      if (email.includes("gmail.com")) {
        setClick((prev) => (prev = `I Heard You`));
        setBtnActive(true);
        setTimeout(() => {
          setClick((prev) => (prev = "Get In Touch"));
          setBtnActive(false);
        }, 5000);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setClick("Check GMail");
        setTimeout(() => {
          setClick("Get In Touch");
        }, 3000);
      }
    }
  }

  return (
    <div id="contactPage">
      <div className="page">
        <h1 className="largeHeading">Contact Now</h1>
      </div>

      <div className="contactForm">
        <form name="contact" method="POST" data-netlify="true">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Example"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div>
            <label htmlFor="phone">Message</label>
            <textarea
              rows={3}
              columns={100}
              wrap="hard"
              maxLength={"100"}
              className="inputArea"
              placeholder="This is an example text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
            />
          </div>
          <button
            className="sendBtn"
            style={{
              background: btnActive
                ? "green"
                : "linear-gradient(180deg,rgba(210, 210, 210, 0.14) 0%,rgba(217, 217, 217, 0.08) 100%)",
            }}
            onClick={(e) => dataHandler(e)}
          >
            {click}
          </button>
        </form>

        <div className="socialLinks">
          <div className="linkedIn">
            <a
              href="https://www.linkedin.com/in/naveen-jangiti-1a1b86235/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="svg" />
            </a>
          </div>

          <div className="twitter">
            <a
              href="https://twitter.com/navetwets"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
