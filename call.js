const arr = [4, 7, 5,  8, 10]
function isOdd(element) {
    return (element % 2 === 1);
  }
console.log(arr.find(isOdd)) //=> 7