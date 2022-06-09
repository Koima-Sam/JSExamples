const add = (num1, num2) => num1 + num2 ;
console.log(add(12,34))
console.log(add(67,34))
console.log(add(02,34))
const greet = (message) => `${message}`;
console.log(greet("Hellow World"))

const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  sum(1,2);