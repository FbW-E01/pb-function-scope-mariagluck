// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 
// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.

// 
function exponentValues(x, y) {
   if (typeof x === "number" || typeof y === "number") {
       console.log(`${x} or ${y} is a number`);
 } else { console.log("This is an ERROR!!");}
   let exponentResult = 1;
   let value = "";
   for (let i = 0; i < y; i++){
       exponentResult *= x;
       value += `${exponentResult} `;
   }
  console.log(value);

}
  
  exponentValues(3, 5);
 
  
//   exponentValues("2", "5");


// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the funcANSWER: if a variable is placed within a function scope it cannot be accessed from outside, it will print error variable not /defined. The variable should be declared outside the function in order to be accessed.tion and print "My favorite fruit is: _x_". 
let bestFruit = "mango";
function printFavoriteFruit() {
    bestFruit = "ananas";
    console.log("My favorite fruit is " + bestFruit);

}
printFavoriteFruit(bestFruit); 

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.


function exponent(number1, number2) {
 let result = 1;
 let MultiplyResult = number1 * number2;
  for (let i = 0; i < number2; i++) {
      result += MultiplyResult;  
 }
   console.log(result); 
} 

exponent(4, 7); 


// ANSWER: if a variable is placed within a function scope it cannot be accessed from outside, it will print error variable not /defined. The variable should be declared outside the function in order to be accessed.