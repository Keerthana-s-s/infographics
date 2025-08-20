import React from "react";
import Charts from "./Charts";

export default function InfographicCard({ info }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
      <p className="text-gray-600 mb-4">{info.description}</p>
      <Charts data={info.data} />
    </div>
  );
}
