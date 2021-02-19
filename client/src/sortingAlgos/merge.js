const mergeSortHandler = (arr, sortByVariable, setMovesArr) => {
  const movesArr = [];

  const mergeSort = (arr) => {
    const len = arr.length;
    if (len < 2) return arr;
    const mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    let result = [];
    const lLen = left.length,
      rLen = right.length;
    let l = 0,
      r = 0;
    while (l < lLen && r < rLen) {
      if (left[l][sortByVariable] < right[r][sortByVariable]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  };
  console.log(mergeSort(arr));
  setMovesArr(movesArr);
  return mergeSort(arr);
};

export default mergeSortHandler;
