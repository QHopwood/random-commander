import React from "react";
import { useNetwork } from "../../contexts/NetworkContext";

const RandomCommanderButton: React.FC = () => {
  const { fetchCard, loading } = useNetwork();
  const handleClick = () => {
    void fetchCard(); // Ensure promise is not returned to onClick
  };
  return (
    <button type="button" onClick={handleClick} disabled={loading}>
      {loading ? "Loading..." : "Generate Commander"}
    </button>
  );
};

export default RandomCommanderButton;
