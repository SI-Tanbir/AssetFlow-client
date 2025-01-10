import { Fragment } from "react";

import "../App.css";
import Banner from "../HomePage/Banner";
import AboutAndPackages from "../HomePage/Aboutpage";
import Navbar from "../Nabar/Navbar";
import AuthContext from "../Provider/AuthContext";

function App() {
  return (
    <>




     
      <div className="max-w-screen-xl m-auto">
        <Navbar></Navbar>
        <Banner />
        <AboutAndPackages></AboutAndPackages>
      </div>
      

    </>
  );
}

export default App;
