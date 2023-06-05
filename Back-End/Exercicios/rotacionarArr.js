
let arr = ["A", "B", "C", "D", "E"];
let q = 10;

function rotacao () {
    let i = 0
    while(i < q) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        i++
        console.log(arr);
    }
}

rotacao();