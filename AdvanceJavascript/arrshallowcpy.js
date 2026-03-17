// Array shallow copy 

let arr=[1,2,3];

let arrcopy=[...arr];

arrcopy[0]=10;
console.log(arr); //[11,2,3] 
console.log(arrcopy); //[10,2,3 ] here there's no role of the object 