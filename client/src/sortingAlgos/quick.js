const quickSortHandler = (arr, sortByVariable) => {
  const quickSort = (arr, left, right) => {
    const partition = (arr, pivot, left, right) => {
      const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };

      let pivotValue = arr[pivot][sortByVariable],
        partitionIndex = left;
      for (let i = left; i < right; i++) {
        if (arr[i][sortByVariable] < pivotValue) {
          swap(arr, i, partitionIndex);
          partitionIndex++;
        }
      }
      swap(arr, right, partitionIndex);
      return partitionIndex;
    };

    let pivot, partitionIndex;
    if (left < right) {
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  };

  console.log(quickSort(arr, 0, arr.length - 1));
  return quickSort(arr, 0, arr.length - 1);
};

export default quickSortHandler;
