import "./stylez.css"
import { useState } from "react";
import Card from "./Card";
export default function Box({ card, moveCard }) {
    const [isOver, setIsOver] = useState(false);
  
    function handleDragOver(e) {
      if (e.dataTransfer.types[0] === "text/plain") {
        setIsOver(true);
        e.preventDefault();
      }
    }
  
    function handleDrop(e) {
      const dataJSON = e.dataTransfer.getData("text/plain");
      let data;
      try {
        data = JSON.parse(dataJSON);
      } catch {}
      if (data && data.type === "card") {
        moveCard();
      }
    }
  
    function handleDragLeave() {
      setIsOver(false);
    }
  
    return (
      <div
        className="gym"
        style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12)" }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        {card ? <Card/> : "Box"}
      </div>
    );
  }