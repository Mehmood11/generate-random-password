let passwordToShow = document.getElementById("password-show-div");
let firstPassword = document.getElementById("pass-1");
let secondPassword = document.getElementById("pass-2");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const btnHandler = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  // console.log(getRandomInt(1, characters.length));
  let result = [];
  let result2 = [];
  for (let i = 0; i < 15; i++) {
    let randomDigit = characters[getRandomInt(1, characters.length)];
    result.push(randomDigit);
    // console.log(characters[i]);
  }
  for (let i = 0; i < 15; i++) {
    let randomDigit = characters[getRandomInt(1, characters.length)];
    result2.push(randomDigit);
    // console.log(characters[i]);
  }
  let firstResult = result.join("");
  let secondResult = result2.join("");

  firstPassword.innerHTML = firstResult;
  secondPassword.innerHTML = secondResult;
};

const passwordOne = () => {
  passwordToShow.textContent = firstPassword.textContent;
};
const passwordTwo = () => {
  passwordToShow.textContent = secondPassword.textContent;
};
