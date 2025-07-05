import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "4px",
      }}>
      {label}
    </button>
  );
};

export default Button;
