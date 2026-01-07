import React from "react";
import Head from "next/head";
import Token from "../projects/HeroesDominionOriginal/Token";
import {
  gameTokens,
  keywordStyles,
} from "../projects/HeroesDominionOriginal/data";

const HeroesDominionTokens = () => {
  // Filter only the keywords you want
  const selectedKeywords = ["lock", "stun", "fly", "crystal", "gravity"];

  // Create keyword tokens from keywordStyles for selected keywords only
  const keywordTokens = selectedKeywords
    .filter((keyword) => keywordStyles[keyword])
    .map((keyword) => ({
      name: keyword,
      color: keywordStyles[keyword].backgroundColor,
      borderColor: keywordStyles[keyword].border || "#333",
      textColor: keywordStyles[keyword].color || "white",
    }));

  return (
    <>
      <Head>
        <title>Heroes Dominion - Tokens & Keywords</title>
        <meta
          name="description"
          content="Print tokens and keywords for Heroes Dominion"
        />
      </Head>

      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}
        >
          Heroes Dominion - Tokens & Keywords
        </h1>

        <div style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "20px",
              borderBottom: "2px solid #333",
              paddingBottom: "10px",
            }}
          >
            Game Tokens
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {gameTokens.map((token) => (
              <div key={token.id} style={{ marginBottom: "10px" }}>
                <Token token={token} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "20px",
              borderBottom: "2px solid #333",
              paddingBottom: "10px",
            }}
          >
            Special Keywords
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {keywordTokens.map((keyword) => (
              <div key={keyword.name} style={{ marginBottom: "10px" }}>
                <Token token={keyword} isKeyword={true} />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
            Each token set contains 3 copies. Print and cut along the borders to
            create individual tokens.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroesDominionTokens;
