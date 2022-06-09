let counter = 0;
function shallowIterator(target) {
    counter++;
    if (typeof target === "object") {
      for (const key in target) {
        shallowIterator(target[key]);
      }
    } else {
        console.log(target);
      }
    }
  const numbers = [1, [2, [4, [5, [6]], 3]]];
  
  shallowIterator(numbers);
  console.log(counter)