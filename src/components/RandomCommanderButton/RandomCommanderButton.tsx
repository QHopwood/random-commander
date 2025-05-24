import React from "react";

interface ButtonProps {
  onClick: () => void;
}
const RandomCommanderButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Generate Commander
    </button>
  );
};

export default RandomCommanderButton;
