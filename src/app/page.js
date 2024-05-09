"use client";

import BoreholeForm from "@/components/Borehole";
import Result from "@/components/Result";
import { calculateHTH } from "@/lib/calculator";

import { useState } from "react";

export default function Home() {
  const [hthRequired, setHthRequired] = useState(null);
  const [diameter, setDiameter] = useState("");
  const [depth, setDepth] = useState("");

  const handleSubmit = ({ diameter, depth }) => {
    const result = calculateHTH(diameter, depth);
    setHthRequired(result);
    setDiameter(diameter);
    setDepth(depth);
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center px-2 bg-orange-400">
      <div className="container bg-white rounded-lg shadow-lg p-10 pl-12 w-full md:w-96 md:h-auto sm:mx-4">
        <div>
          <h1 className="text-2xl text-black font-semibold mb-4">
            Borehole Disinfection Calculator
          </h1>
          <p className="text-gray-700 pb-4">
            Calculate the amount of HTH required
          </p>

          <hr />
        </div>

        <BoreholeForm onSubmit={handleSubmit} />
        {hthRequired !== null && (
          <Result hthRequired={hthRequired} diameter={diameter} depth={depth} />
        )}
      </div>
    </main>
  );
}
