let user={
    name:"Aditi",
    age:"20",
    address: {
        city:"Delhi",
        pincode:1101101,
    }
};

/* let usercopy= JSON.parse(JSON.stringify(user));
output:
{
  name: 'Aditi',
  age: '20',
  address: { city: 'Delhi', pincode: 1101101 }
}
{
  name: 'Aditi',
  age: '20',
  address: { city: 'mumbai', pincode: 1101101 }
} */
let usercopy= structuredClone(user);
/* output 
{
  name: 'Aditi',
  age: '20',
  address: { city: 'Delhi', pincode: 1101101 }
}
{
  name: 'Aditi',
  age: '20',
  address: { city: 'mumbai', pincode: 1101101 }
}
*/
usercopy.address.city="mumbai";
console.log(user);
console.log(usercopy);

