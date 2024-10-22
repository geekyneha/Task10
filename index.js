//  Calculate compound interest with static values.
// Where:
// A = amount
// P = principal
// r = rate of interest
// n = number of times interest is compounded per year
// t = time (in years)

 
let A
let P=45000;
let r=0.034;
let n=4;
let t=3;


A = P * Math.pow((1+(r/n)),(n*t));
A= A.toFixed(0);



console.log(`The compound interest after ${t} years is ${A}`);