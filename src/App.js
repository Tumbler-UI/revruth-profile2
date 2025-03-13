import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Gallery/>
      <Footer />
    </div>
  );
};

export default App;

