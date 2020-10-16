// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: They are both within the same scope which is that of function myFunction. nestedFunction was also invoked within the execution scope


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = function(a){
  let counter = 0;
   for (let i=1; i<=a; i++) {
     counter = counter + i
   }
   return counter;
 }
 
 console.log(summation(5));
