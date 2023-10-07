export const checkedArray = (arr1, arr2) => {
  return arr1.filter((item) => arr2.indexOf(item) !== -1);
};

export const filterArray = (arr1, arr2) => {
  return arr1.filter((item) => arr2.indexOf(item) === -1);
};
