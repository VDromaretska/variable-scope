const scope = "global";
const inGlobal = "I exist in global scope!"

function printScopeExample() {
  const scope = "function inside global";
  const inFunction = "I exist in the function's scope!"

  for (let i = 1; i <= 2; i++) {
    const scope = "loop inside function inside global";
    const inLoopIteration = "I exist in the loop iteration's scope!";
    console.log("my scope is", scope);
    console.log(inLoopIteration);
    console.log(inFunction);
    console.log(inGlobal);
  }

  console.log("my scope is", scope);
  //console.log(inLoopIteration);
  console.log(inFunction);
  console.log(inGlobal);
}

printScopeExample();
console.log("my scope is", scope);
//console.log(inLoopIteration);
//console.log(inFunction);
console.log(inGlobal);