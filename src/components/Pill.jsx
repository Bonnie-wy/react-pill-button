import React from "react";
import styled from "./Pill.module.css";

function Pill({ label, isSelected, onClick, hasIcons = false }) {
  return (
    <div
      className={`${styled.pill} ${isSelected && styled.active}`}
      onClick={onClick}
    >
      <p className={styled.label}>{label}</p>
      {hasIcons && (
        <span
          className={`${styled.icon} ${
            isSelected ? styled.checked : styled.plus
          }`}
        />
      )}
    </div>
  );
}

export default Pill;
