import React from "react";
import styles from "../../styles/HeroesDominionToken.module.scss";

const Token = ({ token }) => {
  const { name, image, effect, description } = token;

  return (
    <div className={styles.token}>
      <div className={styles.tokenImage}>
        <img
          src={`/heroes-dominion/tokens/${image}`}
          alt={name}
          onError={(e) => {
            console.error(`Failed to load token image: ${image}`);
            e.target.style.display = "none";
          }}
        />
      </div>
      
      <div className={styles.tokenName}>
        <span>{name}</span>
      </div>
      
      <div className={styles.tokenDescription}>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Token;
