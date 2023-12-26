import React from "react";

const AdvisorPlaceBox = ({ name, index }) => {
  return (
    <div className="px-4 bg-slate-200 mb-5 mx-4 rounded-2xl hover:bg-slate-300 transition-all">
      <div className="text-lg font-bold">
        {index + 1 + ". " + name.toUpperCase()}
      </div>
      {/* <div className='px-10'>{description}</div> */}
    </div>
  );
};

export default AdvisorPlaceBox;
