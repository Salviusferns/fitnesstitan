import "./stylez.css"

import { useState } from "react";

export default function Card() {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart(e) {
    setIsDragging(true);
    const data = JSON.stringify({ type: "card" });
    e.dataTransfer.setData("text/plain", data);
  }

  function handleDragEnd(e) {
    setIsDragging(false);
    e.dataTransfer.clearData();
  }

  return (
    <div>
        <div
          className="card"
          style={{
            backgroundColor: isDragging ? "#FFFFFF" : "white"
          }}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          Card1
        </div>
        <div
          className="card"
          style={{
            backgroundColor: isDragging ? "#FFFFFF" : "white"
          }}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          Card2
        </div>
    </div>
    
  );
}
