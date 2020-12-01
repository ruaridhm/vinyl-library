const bubbleSort = (arr, sortByVariable, setMovesArr) => {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }

  const movesArr = [],
    length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1][sortByVariable] > arr[j][sortByVariable]) {
        let temp = arr[j - 1];
        movesArr.push({ from: temp, to: arr[j] });
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  setMovesArr(movesArr);
  return arr;
};

export default bubbleSort;
