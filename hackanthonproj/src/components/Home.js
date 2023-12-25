import React, { useContext } from "react";
import context from "../context/maincontext";

const Home = () => {
  const a = useContext(context);
  console.log(a);
  return (
    <>
      <div className="w-screen flex justify-between items-center px-6 py-6">
        <div className="flex items-center">Logo</div>
        <div className="flex gap-10">
          <div>Home</div>
          <div>Near me</div>
          <div>Advisor</div>
        </div>
      </div>
    </>
  );
};

export default Home;
