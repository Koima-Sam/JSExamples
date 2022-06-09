const egregiouslyNestedArray = [ "How",
    ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems.",
  ];

  function iterateArray(target){
      if (typeof target === "object"){
          for (key in target){
              iterateArray(target[key]);
          }
      }
      else{
          console.log(target);
      }
  }
  iterateArray(egregiouslyNestedArray);

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const day1 = days.splice(2);
console.log(days)