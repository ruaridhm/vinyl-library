import records from './temprecords';

const insertion = (sortByVariable) => {
  let inputArr = records;
  const movesArr = [];
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    let current = inputArr[i];
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
    let i = 0;
    let j = i + 1;
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
  return movesArr;
};

export default insertion;
