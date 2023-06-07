// Number
var numberVariable = 42;

// BigInt
var bigIntVariable = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);

// String
var stringVariable = "Hello, World!";

// Boolean
var booleanVariable = true;

// Null
var nullVariable = null;

// Undefined
var undefinedVariable = undefined;

// Object
var objectVariable = {};

// Symbol
var symbolVariable = Symbol("symbol");

// Function
var functionVariable = function() {
  console.log("I'm a function!");
};

// Displaying variable names and their data types
var output = "";
output += "numberVariable is " + typeof numberVariable + "\n";
output += "bigIntVariable is " + typeof bigIntVariable + "\n";
output += "stringVariable is " + typeof stringVariable + "\n";
output += "booleanVariable is " + typeof booleanVariable + "\n";
output += "nullVariable is " + typeof nullVariable + "\n";
output += "undefinedVariable is " + typeof undefinedVariable + "\n";
output += "objectVariable is " + typeof objectVariable + "\n";
output += "symbolVariable is " + typeof symbolVariable + "\n";
output += "functionVariable is " + typeof functionVariable + "\n";

// Displaying the output using alert()
alert(output);
