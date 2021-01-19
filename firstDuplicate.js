console.clear();
const test1 = [2, 3, 3, 1, 5, 2];
const test2 = [2, 4, 3, 5, 1];

function firstDuplicate(arr) {
  let seen = {};
  for (let iterable of arr) {
    if (seen[iterable]) return iterable;
    seen[iterable] = iterable;
  }
  return -1;
}

console.log(firstDuplicate(test1));
console.log(firstDuplicate(test2));
