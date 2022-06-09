let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];


for (const char of myArray){
    console.log(char)
}

const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: '10004',
  };
  
  for (const key in address) {
    console.log(key,":",address[key]);
  }

  const hel = "\"Hello world\""
  console.log(`${hel}`)