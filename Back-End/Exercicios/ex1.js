const arr = [12, 5];

function organizaArr() {
    if((arr[0] - arr[1]) > 0) {
        arr.unshift(arr[1]);
        arr.pop();
    }
    return arr
};

organizaArr();

console.log(arr);