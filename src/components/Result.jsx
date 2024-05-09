import React from "react";

const Result = ({ hthRequired, diameter, depth }) => {
  return (
    <p className="text-black mt-5 text-xl">
      {hthRequired.toFixed(2)} grams of HTH are required to disinfect a borehole
      with a diameter of {diameter} inches and a depth of {depth} meters.
    </p>
  );
};

export default Result;
