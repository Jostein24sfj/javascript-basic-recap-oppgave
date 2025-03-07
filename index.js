/******************************************************************************

WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!



All the assignment instructions are commented out so that you can write your 

code in between them. Remember to read the instructions CAREFULLY, write short 

comments for your code, and feel free to ask for help if you're stuck.



GOOD LUCK!

******************************************************************************/

/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/

/****************************************************************************** 

ASSIGNMENT 2



Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/

//your code here
let myNum = 23;
const myAge = "23";
let thisIsTrue = true;
let thisIsFalse = false;
if (thisIsTrue) {
  console.log("this is indeed true!");
} else {
  console.log("this is not true!");
}
let x = 10 > 9;
if (x) {
  console.log("ja 10 er faktisk større enn 9!");
} else {
  console.log("Hæ? Er ikke 10 større enn 9?!");
}

const cars = ["bmw", "audi", "volvo"];

/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/

//your code here
let age = 23 + 5;
let number = 10 + 10 - 5 / 3;

let price = 10;
price++;
// testet ut +=
console.log(price);
price += 10;
console.log(price);

/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 



(HINT: Use the && (logical AND) to check all 3 in one IF statement)



If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 



If any of the conditions for logging in are not met, console.log an error 

message.



Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/

let userName = "Jason";

let userAge = 18;

let userIsLoggedIn = false;

let userIsBlocked = false;

let goToPage = "";

//your code here
if (userAge >= 18 && userName !== "" && !userIsBlocked) {
  console.log("User is old enough");
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("welcome message");
} else if (userAge < 18) {
  console.log("Error message.. User is not old enough");
}
console.log(goToPage);
/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:



const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/

// const userMale = false;

// your code here
const userMale = true; // Change this to false and see what happens
const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle); // Output: "Mr." if true, "Mrs." if false
