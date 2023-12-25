import React, { useContext } from "react";
import context from "../context/maincontext";

const Home = () => {
  const a = useContext(context);
  console.log(a);
  return (
    <>
      <div className="h-screen w-screen flex justify-around  ">
        <div className="  w-1/2 h-20 flex justify-start items-center pl-8">Logo</div>
        <div className="  w-1/2 h-20 flex justify-center gap-10 items-center">
          <div>Home</div>
          <div>Near me</div>
          <div>Advisor</div>
        </div>
      </div>
    </>
  );
};

export default Home;
