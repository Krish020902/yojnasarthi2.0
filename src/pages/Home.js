import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Section from "../components/Section";
import Bot from "../components/Bot";
import Category from "../components/Category";
const Home = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Slider />
        <Category />
        <Section />
        <Bot />
      </div>
    </>
  );
};

export default Home;
