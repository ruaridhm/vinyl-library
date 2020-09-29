export const mergeSort = (bigArray) => {
  if (bigArray.length < 2) return bigArray;
  let subArr1 = bigArray.slice(0, bigArray.length / 2);
  let subArr2 = bigArray.slice(bigArray.length / 2, bigArray.length);

  return stitch(mergeSort(subArr1), mergeSort(subArr2));
};

const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
};
