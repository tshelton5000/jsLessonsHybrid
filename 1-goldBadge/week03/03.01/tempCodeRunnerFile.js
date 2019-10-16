let arr = [1, 6, 8, 10, 10, 7];
arr.forEach((value, index) => {arr[index] = value + Math.random()})
console.log(arr);