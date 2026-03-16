//  Array with objects 
let arr=[1,2,3]
let arrcopy=[...arr];
let user1=[
{
    name:"d"
} ,
{
    name: "a"
}
];
let usercopy1=[...user1];
usercopy1[0].name="f";
console.log(user1);

/* Output 
[ { name: 'f' }, { name: 'a' } ]

*/