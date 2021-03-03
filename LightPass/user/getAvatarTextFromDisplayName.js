export default (displayName) => {
  if (displayName.length > 2) {
    const wordsArr = displayName.split(/\s+/gm);

    if (wordsArr.length >= 2) {
      return (wordsArr[0][0] + wordsArr[1][0]).toUpperCase();
    }

    return wordsArr[0][0].toUpperCase() + wordsArr[0][1];
  }

  return '';
};
