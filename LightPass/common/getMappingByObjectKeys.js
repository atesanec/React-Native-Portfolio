export default (obj) => {
  const mapping = {};
  if (typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      mapping[key] = key;
    });
  }
  return mapping;
};
