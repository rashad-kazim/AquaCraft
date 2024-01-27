import React from "react";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import About from "./About";
import ContactForm from "./ContactForm";
const Main = () => {
  return (
    <div className="main_container">
      <Banner />
      <Portfolio />
      <About />
      <ContactForm />
    </div>
  );
};

export default Main;
