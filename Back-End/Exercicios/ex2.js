let myArray = [3, 7, 2, 5, 1, 4, 6, 8];

const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  console.log(pivot)
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

  
console.log(quickSort(myArray));

// Estudar