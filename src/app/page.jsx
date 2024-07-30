// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import NextNavbar from "./components/Navbar";
import Home from "./[pages]/Home";
import Book from "./[pages]/Book";
import Packages from "./[pages]/Packages";
import Services from "./[pages]/Services";
import Gallery from "./[pages]/Gallery";
import Review from "./[pages]/Review";
import Contact from "./[pages]/Contact";

const Page = () => {
  return (
    <>
      <NextNavbar />
      <Home />
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      {/* <Contact /> */}
    </>
  );
};

export default Page;
