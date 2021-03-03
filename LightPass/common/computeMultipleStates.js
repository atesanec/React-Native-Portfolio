export default (arrState) => {
  if (arrState.find((state) => state === 'error')) {
    return 'error';
  }
  if (arrState.find((state) => state === 'loading' || state === null)) {
    return 'loading';
  }
  return 'loaded';
};
