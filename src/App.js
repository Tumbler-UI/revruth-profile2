import React from "react";
import ScrollToSection from "./components/ScrollToSection";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <div>
          <ScrollToSection />
          <Navbar />
          <About />
          <Services />
          <Gallery />
          <Footer />
        </div>
    </BrowserRouter> 
  );
};

export default App;

