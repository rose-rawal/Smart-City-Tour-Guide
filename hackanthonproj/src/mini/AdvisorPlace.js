import React, { useContext } from "react";
import AdvisorPlaceBox from "./AdvisorPlaceBox";
import axios from "axios";
import context from "../context/maincontext";
const location = [
  [
    {
      name: "kathmandu",
      description: "Awesome Place",
    },
    {
      name: "Pokhara",
      description: "Awesome Place Pokhara",
    },
    {
      name: "Imadole",
      description: "Awesome Place Imadole",
    },
  ],
  [
    {
      name: "kathmanu",
      description: "Awesome Place",
    },
    {
      name: "Pokhaa",
      description: "Awesome Place Pokhara",
    },
    {
      name: "Imadole",
      description: "Awesome Place Imadole",
    },
  ],
];
const AdvisorPlaces = () => {
  const { data } = useContext(context);
  return (
    <div className="bg-slate-100 w-3/4 mt-10 min-h-80 ">
      <div className=" text-xl font-mono font-bold px-4 py-4">
        Make Your Path
      </div>
      {data?.data !== "err" &&
        data?.data.map((n, i) => (
          <div className="">
            <h2 className="text-center text-xl font-bold pb-4">
              Starting Point : {i + 1}
            </h2>
            {n.map((n, i) => (
              <AdvisorPlaceBox name={n} index={i} key={n} />
            ))}
            <div className="bg-black w-3/4 h-1 m-auto"></div>
          </div>
        ))}
    </div>
  );
};

export default AdvisorPlaces;
