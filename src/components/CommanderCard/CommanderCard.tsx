import React from "react";
import { useNetwork } from "../../contexts/NetworkContext";
import cardPlaceholderImg from "../../assets/card.jpeg";
import styles from "./CommanderCard.module.css";

const CommanderCard: React.FC = () => {
  const { card, loading } = useNetwork();
  const [imgLoaded, setImgLoaded] = React.useState(false);

  React.useEffect(() => {
    setImgLoaded(false);
  }, [card?.imageUrl, loading]);

  const handleImgLoad = () => setImgLoaded(true);

  // Show placeholder only while loading or before card is loaded
  const showPlaceholder = loading || !card || !card.imageUrl;
  const imageSrc = showPlaceholder ? cardPlaceholderImg : card.imageUrl;
  const imageAlt = showPlaceholder ? "Card placeholder" : card.name;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.spinnerOverlay}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`${styles.cardImage} ${imgLoaded ? styles.loaded : ""}`}
          onLoad={handleImgLoad}
        />
        {loading && <div className={styles.spinner}></div>}
      </div>
    </div>
  );
};

export default CommanderCard;
