function primeX(number) {
  let prima = 2; // bilangan prima dimulai dari angka 2
  let arr = []; // datanya dimasukkan ke dalam array

  while (arr.length < number) {
    let num = 0;
    for (i = 2; i <= Math.sqrt(prima); i++) {
      //  Math.sqrt() adalah method javascript yang berfungsi untuk mencari hasil dari akar kuadrat sebuah angka.
      if (prima % i == 0) {
        num++;
        break;
      }
    }
    if (num == 0) {
      arr.push(prima);
    }
    prima++;
  }
  return arr[arr.length - 1];
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71
