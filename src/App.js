import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Section from "./components/Section";
import SingleScheme from "./components/SingleScheme";
import LandingScheme from "./components/LandingScheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Bot from "./components/Bot";

function App() {
  // const {temp} = useSchemeContext();
  return (
    //Main Page and Chatbot
    // <div className="App">
    //   {/* <> */}
    //   <Navbar />
    //   <Slider />
    //   {/* </> */}
    //   <div className="section">
    //     <Section />
    //   </div>
    //   <div>
    //     <Bot />
    //   </div>
    // </div>

    //Landing Page
    // <div className="App">
    //   <Navbar />
    //   {/* <SingleScheme /> */}
    //   <Bot />
    //   <LandingScheme />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oneScheme" element={<LandingScheme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
