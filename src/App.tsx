import React from "react";
import ItemList from "./ItemList";

const App: React.FC = () => {
  const items = ["React", "TypeScript", "Tailwind", "Next.js"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Tech Stack</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;
