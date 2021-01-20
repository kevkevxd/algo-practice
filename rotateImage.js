console.clear();

a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(a);
function rotateImage(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      let temp = a[i][j]; // hangin out
      a[i][j] = a[j][i]; // reset
      a[j][i] = temp; //
    }
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length / 2; j++) {
      let temp = a[i][j];
      a[i][j] = a[i][a.length - 1 - j];
      a[i][a.length - 1 - j] = temp;
    }
  }
  return a;
}
console.log(rotateImage(a));
// [a[i][j], a[j][i]] = [a[j][i], a[i][j]] //line 4,5,6; es6
