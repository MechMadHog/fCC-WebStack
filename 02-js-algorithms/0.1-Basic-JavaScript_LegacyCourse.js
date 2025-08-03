// There are eight different data types which are:
/* 
    undefined
    null
    boolean
        true || false 
    string
        "12"
    symbol
        +   Addition
        -   Subtraction
        *   Multiplication
        /   Division
        ++  Increment or [i = i + 1;]
            myVar = ++myVar;
        --  Decrement
    bigint
    number
        12
        floating point || floats    1.1     Decimals
    object
*/
// Variables use a "label" to store data types.
// Variablesmust be declared.

var myName;
// When JavaScript variables are declared, they have an initial value of undefined.

var myFirstName = "Michael";
var myFirstName = "Mike";
// When a variable is declared twice, the first time is overwritten.
// If I replace var with let in the code above, it results in an error: let is introduced as part of ES6 syntax.
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);
/*
    variables declared using const are read-only. 
    They are a constant value, 
    which means that once a variable is assigned with const, 
    it cannot be reassigned:
*/

// Setup
var a;
a = 7;
var b;
// Only change code below this line
b = a;

var a = 9;

var myFirstName = "Mike";
var myLastName = "MacDonagh";
// Case Sensitivity: It is possible to have multiple distinct variables with the same name.
// Variable declaration
var properCamelCase;


// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";

//When a variable is declared twice, the first time is overwritten.



