import React, { useEffect } from "react";
import "../styles/Contact.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  useEffect(() => {
    const overlay = document.querySelector(".network-overlay");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = overlay.getBoundingClientRect();
      const offsetX = (clientX / width) * 100;
      const offsetY = (clientY / height) * 100;

      overlay.style.background = `radial-gradient(circle at ${offsetX}% ${offsetY}%, rgba(97, 218, 251, 0.6), rgba(26, 26, 29, 0))`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a433efb8-2030-459e-a196-13d70a2ea920");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      window.location.reload();
    }
  };

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Thank you for contacting us!",
      text: "We have received your message.",
      icon: "success",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="network-overlay"></div>
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              If you have any questions or just want to say hello, feel free to
              drop me a message!
            </p>
          </div>
          <div className="contact-form">
            <h3>Contact Form</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" onClick={showSwal} className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
