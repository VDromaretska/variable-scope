"use strict";

console.log("Start of programme");

const healthyFoods = ['fruit', 'veg'];
const junkFoods = ['chocolate', 'cake', 'poison'];

for (let item of healthyFoods) {
  console.log(`${item} is normally considered a healthy food`);
}

for (let item of junkFoods) {
  console.log(`${item} is NOT normally considered a healthy food`);
  // below will error. Why?
  console.log(`...so, swap it for ${item}!`);
}

console.log("Reached the end of my programme!");