import React from "react";
import SubNavBar from "../Layouts/SubNavBar";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import Copyrights from "../Layouts/Copyrights";
import Slider from "../home/slider";
import GallaryDetails from "./GallaryDetails";

function Gallary() {
  return (
    <div>
      <SubNavBar />
      <NavBar />
      <Slider/>
      <GallaryDetails/>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default Gallary;
