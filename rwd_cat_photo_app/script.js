// this is one-line comment
/* this is a 
multi-line comment */

var myName;

//Step 3
var a;
a =7;
// инициализация переменной и сразу присвоение ей значения
var a = 9;
//Step 6 String
var myName = "Ivan";
var myLastName = "Pasechnikov";

var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 1;
c = c + "String";
console.log(a);
console.log(b);
console.log(c);

// key word let - объявить переменную с помощью let можно только ОДИН раз
let canName = "Oliver";
let catSound = "Meow";

// ключевое слово const

/* Step 10
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
*/

const FCC = "freeCodeCamp";
let fact = "is cool";
fact = "is awsome";
console.log(FCC, fact);

// Step 11 addition сложение
const addition = 45 + 15;
console.log(addition);

//Step 12 Subtraction вычетание
const difference = 45 - 33;
console.log(difference);

//Step 13 multiply
const multiply = 4 * 4;
console.log();

// Step 14 divide
const quotient = 66 / 33;
console.log(quotient);

//Step 15 incriment увеличение
let myVar = 99;
myVar++;

//Step 16 Decrement уменьшнеие
let myVar1 = 100;
myVar1--;
console.log(myVar1);

//Step 17 decimal numbers
let myDecimal = 5.8;
console.log(myDecimal);
myDecimal = myDecimal * 2.5;
console.log(myDecimal);
// step 18 devide
let quotient1 = myDecimal / 2.2;
console.log(quotient1);

//Step 20 поиск остатка
let reminder = 11 % 3;
console.log(reminder);

//Step 21 составное присваивание
let x = 3;
let y = 17;
let z = 12;
x +=12;
y +=9;
z +=7;
console.log(x, y, z);
//Step 22 составное присваивание с вычетанием
x -= 6;
y -= 15;
z -= 1;
console.log(x, y, z);

//Step 23 сщставное присваивание с умножением
x *= 5;
y *=10;
z *=15;

// Step 24 составное присваивание с делением

x /= 2;
y /= 5;
z /= 6;

// Step 25 
let myStr1 = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
// Step 26
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//Step 27 escape
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr);

// Step 28 соединение строк
let myStr2 = "This is the start. " + "This is the end.";
console.log(myStr2);
//Step 28
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
// Step 30 создание строк с переменными
const myName1 = "Ivan";
const myStr3 =  "My name is " + myName1 + " and I am well!";

//Step 31 Appending Variables to Strings
const someAdjective1 = "cool!";
let myStr32 = "Learning to code is ";
myStr32 += someAdjective1;