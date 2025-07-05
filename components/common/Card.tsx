import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
      }}>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", borderRadius: "6px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
