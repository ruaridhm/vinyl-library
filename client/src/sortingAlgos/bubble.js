import records from './temprecords';

const bubbleSort = (sortByVariable) => {
  const movesArr = [],
    arr = records,
    length = records.length;
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
  console.log(movesArr);
  return arr;
};

export default bubbleSort;
