import React, { useState } from "react";
import context from "./maincontext";
import axios from "axios";
const Context = ({ children }) => {
  const [data, setData] = useState();
  const [searchPlace, setSearchPlace] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log("search Place", searchPlace);
    axios.post("http://localhost:8000/advise/get", searchPlace).then((val) => {
      setData(val);
    });
    // console.log(route)
  };
  return (
    <context.Provider
      value={{ searchPlace, setSearchPlace, handleClick, data, setData }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
