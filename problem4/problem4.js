function maxSequence(arr) {

  let max;
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let jumlahUntukLoopingI = arr[i];
    max = getMax(max, jumlahUntukLoopingI);

    for (let j = i + 1; j < arr.length; j++) {
      jumlahUntukLoopingI += arr[j];

      max = getMax(max, jumlahUntukLoopingI);
    }
  }

  return max;
}

// fungsi yang hasil kembaliannya nilai paling besar
function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])); // 7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])); // 8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])); // 12
