// console.clear();
// const test = "abacabaabacaba";
// const test2 = "abacabad";

function firstNotRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (str.indexOf(letter) == i && str.indexOf(letter, i + 1) == -1)
      return letter;
  }
  return "_";
}
