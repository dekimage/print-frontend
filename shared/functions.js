export const getCardMargin = (index) => {
  // Calculate the card's position within the current set of 9 cards
  const positionWithinSet = index % 9;

  // Apply 15px margin to the 7th, 8th, and 9th cards within each set
  if (positionWithinSet >= 6 && positionWithinSet <= 8) {
    return "45px"; // Apply the special margin
  } else {
    return "0"; // Apply 0 margin to all other cases
  }
};

export const getCardMarginTop = (index) => {
  // Calculate the card's position within the current set of 9 cards
  const positionWithinSet = index % 9;

  // Apply 15px margin to the 7th, 8th, and 9th cards within each set
  if (positionWithinSet >= 0 && positionWithinSet <= 2) {
    return "25px"; // Apply the special margin
  } else {
    return "0"; // Apply 0 margin to all other cases
  }
};
