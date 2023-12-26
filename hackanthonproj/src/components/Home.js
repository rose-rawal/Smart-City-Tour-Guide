import React, { useContext } from "react";
import context from "../context/maincontext";

import Navbar from "./Navbar";
import image from "../images/img1.jpg";
import Header from "./header";
const Home = () => {
  const a = useContext(context);
  console.log(a);

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    // backgroundSize: 'cover',
    backgroundPosition: "center",
    height: "100vh", // Set the height of the image to cover the full viewport height
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
    overflow: "hidden", // Prevent any content overflow
  };

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
};

export default Home;
