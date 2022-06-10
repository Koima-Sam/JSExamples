// const myFavouriteCar = "Mercedes";

// function purchase(){
//     const price = 34000;
//     console.log(`Let me buy ${myFavouriteCar} at ${price}`);
// }
// purchase()
// console.log(`Let me buy ${myFavouriteCar} at ${price}`);

num = [1,2,3,3,4,5,5];
let sum = 0;

function add(num){
    for (let i = 0 ; i<num.length; i++){
        sum += num[i];
        
    }
    return sum;


}
function avg(z){
    return z(num)/2
}

console.log(avg(add))
