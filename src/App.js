import Navbar from "./components/Navbar";
import React from "react";
import ProfileSection from "./components/ProfileSection";
import Ministry from "./components/MInistry";
import Education from "./components/Education";



const App = () => {
  return (
    <>
      <Navbar />
      <ProfileSection />
      <Ministry/>
      <Education/>
    </>
  );
};

export default App;
