import React, { useEffect, useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [validate, setValidate] = useState(null);
  const [showbtn, setshowbtn] = useState(false);
  const ValidateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return setValidate(true);
    }
    return setValidate(false);
  };
  const handelemail = (e) => {
    setEmail(e);
    ValidateEmail();
  };
  useEffect(() => {
    if (name !== null && email !== null && message !== null && !validate) {
      setshowbtn(true);
    } else {
      setshowbtn(false);
    }
  }, [email, message, name]);
  const handelClick = () => {
    if (validate && name !== null && email !== null && message !== null) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <motion.div
      className="Contact-me"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1>
        CONTACT <span>ME</span>
      </h1>
      ;
      <div className="Contact" id="five">
        <motion.div
          className="Contact-deal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://protfilo-by-js.vercel.app/image/Delivery.webp"
            alt="deal"
          />
          <span>do free work</span>
          <span>
            I am available to work on my own. Contact me via and connect to my
            account.
          </span>
          <div className="Contact-icon">
            <a
              href="https://www.facebook.com/Anamohmed135"
              target="blank"
              className="Contact-icon-facebook"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/Anamohmed00" target="blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohmedmahmoudfouad"
              target="blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Mohmed932" target="blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="Contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <form action="https://formspree.io/f/mvongvoe" method="post">
            <div className="main-form">
              <label for="name">Your Name</label>
              <input
                name="name"
                id="name"
                type="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {name === "" ? <span>you must enter you name</span> : ""}
            </div>
            <div className="main-form">
              <label for="email">Your Email</label>
              <input
                name="Email"
                id="email"
                type="email"
                onChange={(e) => handelemail(e.target.value)}
                value={email}
              />
              {email === "" ? <span>you must enter you email</span> : ""}
              {validate ? <span>you email is not invalid</span> : ""}
            </div>
            <div className="main-form">
              <label for="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                type="message"
                className="Contact-message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              {message === "" ? <span>you must enter you name</span> : ""}
            </div>
            {showbtn ? (
              <button type="submit" className="btn" onClick={handelClick}>
                Submit
              </button>
            ) : (
              ""
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
