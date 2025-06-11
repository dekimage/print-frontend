import React from "react";

// Gold coin icon
export const GoldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#f1c40f"
      stroke="#e67e22"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="12"
      r="7"
      fill="#f39c12"
      stroke="#e67e22"
      strokeWidth="0.5"
    />
    <text
      x="12"
      y="16"
      fontSize="12"
      fontWeight="bold"
      fill="#d35400"
      textAnchor="middle"
    >
      $
    </text>
  </svg>
);

// Wood resource icon
export const WoodIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" fill="#8b4513" />
    <line x1="9" y1="4" x2="9" y2="20" stroke="#5d2906" strokeWidth="1" />
    <line x1="15" y1="4" x2="15" y2="20" stroke="#5d2906" strokeWidth="1" />
  </svg>
);

// Stone resource icon
export const StoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <polygon
      points="12,2 22,8 22,16 12,22 2,16 2,8"
      fill="#7f8c8d"
      stroke="#34495e"
      strokeWidth="1.5"
    />
    <path
      d="M4,10 L12,14 L20,10"
      fill="none"
      stroke="#34495e"
      strokeWidth="1"
    />
  </svg>
);

// Movement icon
export const MoveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#3498db"
      stroke="#2980b9"
      strokeWidth="1.5"
    />
    <path
      d="M12,5 L12,19 M8,9 L12,5 L16,9 M8,15 L12,19 L16,15"
      fill="none"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

// Mana/Magic icon
export const ManaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#9b59b6"
      stroke="#8e44ad"
      strokeWidth="1.5"
    />
    <path d="M12,4 L8,12 L16,12 Z" fill="white" />
    <path d="M12,20 L16,12 L8,12 Z" fill="white" />
  </svg>
);

// Victory Point icon
export const VpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <polygon
      points="12,2 15.5,9 23,9 17,14 19.5,21 12,17 4.5,21 7,14 1,9 8.5,9"
      fill="#2ecc71"
      stroke="#27ae60"
      strokeWidth="1.5"
    />
    <text
      x="12"
      y="15"
      fontSize="8"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      VP
    </text>
  </svg>
);

// Export all icons as a map
export const ResourceIcons = {
  gold: GoldIcon,
  wood: WoodIcon,
  stone: StoneIcon,
  move: MoveIcon,
  mana: ManaIcon,
  vp: VpIcon,
};
