// REGEX

let regex = /hello/;

// Correct constructor
let pattern = new RegExp("hello");

let text = "hello world";
console.log(pattern.test(text)); // true


// Flags(modifiers)
let text1 = "hello world hello world hello world";
let pattern1 = /hello/gi;

console.log(text1.match(pattern1)); 


//characters 
//let patternC=

// Special characters
let c = /^\d+$/;

console.log(c.test("123456"));   // true
console.log(c.test(" 123456"));  // false (space issue) 


// quantifiers 
//*:0 or more 
// +:1  or more 
let reges=/\d{3}/;
console.log("12345".match(reges));

// grouping 
//( ):  |:OR

let reges1=/(cat|dog)/;
console.log(reges1.test("I have a dog ")); 

// .exec 

let regex1=/hell0/i;
console.log(regex1.exec("hello world"));

let test1="hello world";
let result=test1.replace(/world/,"javascript")
console.log(result); //hello javascript 


let result2=test1.search(/world/);
console.log(result2); //6

let text2="a,b,c";
console.log(text2.split(/,/));