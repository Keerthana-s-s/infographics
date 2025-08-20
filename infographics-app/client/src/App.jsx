import React, { useEffect, useState } from "react";
import InfographicCard from "./components/InfographicCard";

export default function App() {
  const [infographics, setInfographics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/infographics")
      .then(res => res.json())
      .then(data => setInfographics(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🌍 Interactive Infographics
      </h1>
      <div className="grid gap-6">
        {infographics.map(info => (
          <InfographicCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
}
