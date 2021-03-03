const mergeSortHandler = (
  arr: Array<any>,
  sortByVariable: string,
  setMovesArr: React.Dispatch<
    React.SetStateAction<({ from: number; to: number } | null)[]>
  >
) => {
  const movesArr: Array<{ from: number; to: number } | null> = [];

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
      left[l][sortByVariable] < right[r][sortByVariable]
        ? result.push(left[l++])
        : result.push(right[r++]);
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  };
  console.log(mergeSort(arr));
  setMovesArr(movesArr);
  return mergeSort(arr);
};

export default mergeSortHandler;
