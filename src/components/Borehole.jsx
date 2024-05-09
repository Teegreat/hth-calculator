"use client";

import React, { useState } from "react";

const BoreholeForm = ({ onSubmit }) => {
  const [diameter, setDiameter] = useState("");
  const [depth, setDepth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ diameter, depth });
    // setDiameter("");
    // setDepth("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto mt-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Diameter (inches)
        </label>
        <input
          type="number"
          value={diameter}
          onChange={(e) => setDiameter(e.target.value)}
          className="focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-3 ring-1 ring-slate-200 shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor=""
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Depth (m)
        </label>
        <input
          type="number"
          value={depth}
          onChange={(e) => setDepth(e.target.value)}
          className="focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900  rounded-md py-2 px-3 ring-1 ring-slate-200 shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus: shadow-outline"
      >
        Calculate
      </button>
    </form>
  );
};

export default BoreholeForm;
