let arr = [6, 1, 3, 4, 6];

const bubbleSort = (arr) => {
    let swapped;
  
    do {
      swapped = false;
        for(let i = 0; i >= arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let temporario = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temporario   
                swapped = true;
            }
        }
} while (swapped);

return arr;
};
bubbleSort(arr);

console.log(arr)