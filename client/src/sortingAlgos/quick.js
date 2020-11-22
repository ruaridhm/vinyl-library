import records from './temprecords';

const quickSortHandler = (sortByVariable) => {
  let arr = records;

  function quickSort(arr, left, right) {
    function partition(arr, pivot, left, right) {
      function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }

      var pivotValue = arr[pivot][sortByVariable],
        partitionIndex = left;

      for (var i = left; i < right; i++) {
        if (arr[i][sortByVariable] < pivotValue) {
          swap(arr, i, partitionIndex);
          partitionIndex++;
        }
      }
      swap(arr, right, partitionIndex);
      return partitionIndex;
    }
    var len = arr.length,
      pivot,
      partitionIndex;

    if (left < right) {
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);

      //sort left and right
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  }
  console.log(quickSort(arr, 0, arr.length - 1));
};

export default quickSortHandler;
