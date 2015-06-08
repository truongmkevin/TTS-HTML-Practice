// var message = "Hello Worlds!";
// console.log(message);

// Variables
/*
var x = "Hey ";
var y = "10";
console.log(x);
console.log(y);
for (var i = 0; i < y; i++) {
  console.log(x);
}

y = "is for horses!";
console.log(x+y);
*/

// Data Types

// numbers

// var interger_num = 1,
//     float_num = 1.23;

// console.log(interger_num + float_num);

// // strings

// var message = "Let's learn JavaScript!";
// console.log(message);


// // booleans
// var is_cool = true;
// console.log(is_cool + " dat")

// // arrays

// var my_stuff = [interger_num, message, is_cool];
// console.log(my_stuff);

// // hashes
// var capitals = {
//   LA: "Baton Rouge",
//   TX: "Austin",
//   GA: "Atlanta"
// };
// console.log(capitals["LA"]);

// null and undefined (JS has two concepts of emptiness)
// variables that haven't been initialized are undefined
// var x;
// console.log(x); //undefined

// // but they aren't null
// console.log(x === null); // false

// // unless you make them null
// x = null;
// console.log(x);
// console.log(x === null);

// // or use 'type coercion' - 2 equal signs will change the value
// console.log(x == undefined);
// console.log(x);

// // This variable is in the global scope
// var x = "I'm a global variable called 'x'";
// // console.log(x);

// // Defining a function called someFunction
// function someFunction(){
//   // This variable only exists inside this function
//   var y = "I'm a local variable called 'y'";
//   console.log(x);
//   console.log(y);

//   // This can be bad, this modifies the global variable within this function
//   x = "I'm now a bad local variable called 'x'"; //
// }

// // Calling someFunction
// someFunction();
// // console.log(y); // will cause errors
// console.log(x);

// Operators
// var x = 10,
//     y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(y - x);
// console.log(x > y);
// console.log(x < y);
// console.log(x === y);
// console.log(x !== y);

// var a = true,
//     b = false;
// console.log(a && b); // ampersands make and
// console.log(a || b); // pipes make or

// Conditionals
// var x = 1,
//     y = 5;
// if (x > y){
//   console.log("x is greater than y")
// } else if (x < y){
//   console.log("x is less than y")
// } else {
//   console.log("x is equal to y")
// }

// Loops
var numbers = [1, 2, 3, 4, 5];
// C-style JS Loop
// for (var i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }

// // for each loop
// numbers.forEach(function (element){
//   console.log(element);
// });

// While loop
// var i = 0;
// while (i < numbers.length){
//   console.log(numbers[i]);
//   i++;
// }

// Functions
// A Function with explicit arguments
// function sumExplicity(a, b){
//   console.log(a + b);
// }
// sumExplicity("There are ", 10);

// A Function with implicit arguments
function sumImplicity(){
  var total = 0;

  for (var i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
  // console.log(total);
  return total;
}

var x = sumImplicity(10, 5, 20, " that's a lot", 10, 40, " 10");
console.log(x);
var y = sumImplicity(x, sumImplicity(7,8));
console.log("y is equal to " + y);