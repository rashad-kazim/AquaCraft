import React, { useState } from "react";
import "../css/form.css";
import phone from "../assets/images/phone.png";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact_container" id="contact">
      <div className="contact_top_side">
        <div className="top_header_container">
          <span className="top_header">Contact Us</span>
          <div className="form_line"></div>
          <span className="top_header_detail">
            Get in touch by leaving us a line below! Alternatively, give us a
            call and we will be happy to help answer any questions you may have.
          </span>
        </div>
        <div className="top_main">
          <div className="contact_item">
            <img src={phone} alt="" />
            <span className="item_name">CALL US</span>
            <span className="item_content">07718 278420</span>
          </div>
          <div className="contact_item">
            <img src={email} alt="" />
            <span className="item_name">EMAIL</span>
            <span className="item_content">info@aquacraft.co.uk</span>
          </div>
          <div className="contact_item">
            <img src={location} alt="" />
            <span className="item_name">ADRESS</span>
            <span className="item_content">
              AquaCraft, Dollings Pool Farm,TA19 9PX
            </span>
          </div>
        </div>
      </div>

      <div className="contact_bottom_side">
        <div className="contact_form_container">
          <form onSubmit={handleSubmit}>
            <div className="form_item_container">
              <input
                type="text"
                placeholder="Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_item_container">
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_item_container">
              <textarea
                placeholder="Your Message*"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form_submit">
              Send Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
