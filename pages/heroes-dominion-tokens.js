import React from "react";
import Token from "../projects/HeroesDominionOriginal/Token";
import { gameTokens } from "../projects/HeroesDominionOriginal/data";

const HeroesDominionTokensPage = () => {
  // Generate tokens based on quantity
  const allTokens = [];
  gameTokens.forEach(token => {
    for (let i = 0; i < token.quantity; i++) {
      allTokens.push({
        ...token,
        id: `${token.id}_${i + 1}`,
        displayName: `${token.name} ${i + 1}`
      });
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Heroes Dominion Original - Game Tokens</h1>
      <p>Print and cut these tokens for gameplay</p>
      
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "5px",
        margin: "20px 0"
      }}>
        {allTokens.map((token, index) => (
          <Token key={index} token={token} />
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Token Summary:</h2>
        <ul>
          {gameTokens.map(token => (
            <li key={token.id}>
              <strong>{token.name}</strong>: {token.quantity} tokens - {token.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroesDominionTokensPage;
