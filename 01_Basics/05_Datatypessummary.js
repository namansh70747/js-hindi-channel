//Primitive Data types 7 Types
/*
Number 
String
Boolean
Null
Undefined 
Symbol
BigInt
*/
const number = 100
const scoreValue = 100.3

let string = "Sakshi Sharma"
const boolean = false 
const nul = null
let undef;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id)
console.log(id)
console.log(anotherId);
if(id == anotherId){
    console.log('The symbols are equal')
}
else{
    console.log('The symbols are not equal')
}
let BigNumber = 1223456789012345612432222222n
console.log(BigNumber)
console.log(typeof BigNumber);

//Non Primitive Data types
/*Call By reference 
Call by Value

Objects 
Arrays
Functions
*/
const heroes = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"Hitesh",
    age:22,
    isLoggedIn:true
}
const myfunction = function(){
    console.log("I am a function")
}
console.log(typeof myfunction);
//Function Datatype is called ObjectFunction
console.log(typeof myObj);
//And all Others Non Primitive Have function datatype as per teacher 


//Making a Datatype Table 
console.table([
        {variable : number, datatype : typeof number},
        {variable : string , datatype : typeof string},
        {variable : boolean , datatype : typeof boolean},
        {variable : undef , datatype : typeof undef},
        {variable : nul , datatype : typeof nul},
        {variable : myObj , datatype : typeof myObj} ,
        {variable : myfunction , datatype : typeof myfunction} ,
        ])


//Stack memory[primitive] and Heap Memory[Non Primitive]

// let myyoutubename = "Hiteshchoudharydocom";
// let anothername = myyoutubename
// anothername = "chaiaurcode"

// console.log(myyoutubename);
// console.log(anothername);

let userone = {
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo = userone
usertwo.email = "user2@google.com"

console.log(userone);
// That's why it called Heap Memory