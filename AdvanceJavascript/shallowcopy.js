let user={
    name:"Aditi",
    age:"20",
    address: {
        city:"Delhi",
        pincode:1101101,
    }
};
// two ways to assign or copy the data
// let usercopy= {...user};
let usercopy=Object.assign.user({},user); //check this code  
usercopy.address.city="mumbai";
console.log(user);
console.log(usercopy);


// shallow copy works on nested copy ...it is not fully idependent 