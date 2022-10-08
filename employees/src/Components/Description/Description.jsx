import React from "react";

export default function Description({
  description,
  name,
  showDetails,
  setShowDetails,
}) {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <button
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        x
      </button>
      <p>שם המשימה</p>
      <p>{name}</p>
      <p>תיאור המשימה</p>
      <p>{description}</p>
      <button>סיים משימה</button>
    </div>
  );
}
