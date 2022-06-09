// var fname = "John";
// var lname = "John";

// if (fname==lname && lname!='John'){
//     console.log("True")
// }
// else{
//     console.log('false')
// }

var bucket_lists = ["Morocco","Ethiopia","Ghana"];
bucket_lists[3] = "Uganda";
console.log(bucket_lists);
var reptiles = ["Lizards", "Turtles","Dinosaur" ];

var amphibians = ["Frogs", "Salamanda","Caudata" ];


var mammals = ["Humans", "Elephants","Sloths" ];
var birds = ["Parrots", "Owls", "Penguin"];

var animals = birds;
animals = animals.concat(reptiles,mammals,amphibians);
animals.pop();
console.log(animals.slice(0,2));