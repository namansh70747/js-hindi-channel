const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(2));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// ********************** Maths ***********************

console.log(Math);
//It's type is Object and it includes many properties which are very helpfull

//-4 Hoga toh 4 ban jayega and +4 hoga toh +4 hi Rahega 
console.log(Math.abs(-4));

//RoundOff
console.log(Math.round(4.6));

//Ceil - It takes the value which is bigger than the decimal number means for 4.2 it gives output as 5 hence this is the conclusion from this 
console.log(Math.ceil(4.2));

//floor - It takes the value which is smaller than the decimal number means for 4.2 it gives output as 4 hence this is the conclusion from this
console.log(Math.floor(4.2));

//Min
console.log(Math.min(10, 20, 30, 40, 50));

//Max
console.log(Math.max(10, 20, 30, 40, 50));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);






