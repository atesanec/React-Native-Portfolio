export default (arr) => arr.reduce((acc, value) => {
  if (value) {
    if (!acc) {
      return value;
    }
    return `${acc}, ${value}`;
  }
  return acc;
}, '');
