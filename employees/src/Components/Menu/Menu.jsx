import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
      }}
    >
      <button>כל המשימות</button>
      <button>המשימות שלי </button>
      <button> משימה חדשה</button>
      <button>היסטוריה </button>
      <button>יציאה </button>
    </div>
  );
}
