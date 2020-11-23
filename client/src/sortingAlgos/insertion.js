const insertionSort = (arr, sortByVariable) => {
  const inputArr = arr,
    movesArr = [],
    n = inputArr.length;
  for (let i = 1; i < n; i++) {
    const current = inputArr[i];
    let j = i - 1;
    while (j > -1 && current[sortByVariable] < inputArr[j][sortByVariable]) {
      inputArr[j + 1] = inputArr[j];
      movesArr.push({
        from: current,
        to: inputArr[j],
      });
      j--;
    }
    inputArr[j + 1] = current;
  }

  const shrinkMovesArr = (movesArr) => {
    let i = 0,
      j = i + 1;
    while (i < movesArr.length && j < movesArr.length) {
      if (
        movesArr[i].from[sortByVariable] === movesArr[j].from[sortByVariable]
      ) {
        movesArr.splice(i, 1);
      } else {
        i++;
        j = i + 1;
      }
    }
    return movesArr;
  };
  shrinkMovesArr(movesArr);
  console.log(movesArr);
  console.log(inputArr);
  return inputArr;
};

export default insertionSort;
