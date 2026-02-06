let a =5;
let b=6;

console.log(a+b);
console.log(a*b);
//  console.log(a*b);
 var p=21;
 
console.log(p*a);
var p=3;
console.log(b/p);
let k=80;
console.log(k);

// function
function add(p,q) {
       return p+q;
}
console.log(add(10,20));

// arrow function

const multiply=(p,q)=>p*q;
console.log("arrow function",multiply(5,5));
 
// ARRAY
let arr=[10,20,30,40];
console.log(arr[0]);
arr.push(15)
    arr.pop()
console.log(arr);

//Object
let student ={
    name:"Aditi ",
    Age :20,
    course:"B-tech",
};
console.log(student.name);

let today=new Date();
console.log(today);

console.time("test");
for(let i=0;i<1000;i++) {}
    console.timeEnd("test");
    

    // GROUP
    // console.group()

    console.count("a");
    console.count("a");
    console.count("a");
    console.count("b");
    console.count("a");
    console.count("c");


    let participants={
        name:"Aditi" ,
        age:"20" ,
        class: "cse 11",
    }
    console.table(participants);