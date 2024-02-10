export const getCardMargin = (index) => {
  const positionWithinSet = index % 9;

  if (positionWithinSet >= 6 && positionWithinSet <= 8) {
    // return "45px";
    // return "22.5px";
  } else {
    return "0";
  }
};

export const getCardMarginTop = (index) => {
  const positionWithinSet = index % 9;

  if (positionWithinSet >= 0 && positionWithinSet <= 2) {
    return "20px";
  } else {
    return "0";
  }
};
