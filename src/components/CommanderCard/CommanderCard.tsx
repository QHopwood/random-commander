import React from "react";

interface CommanderCardProps {
  url: string;
  alt: string;
}

const CommanderCard: React.FC<CommanderCardProps> = ({ url, alt }) => {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
};

export default CommanderCard;
