var animals = {
    zebra:{
        classification:"Mammal",
        appearance:["White with black stripes", "4 legs","Looks like a donkey"],
        habitat:"Grasslands",
        lifespan :25,
        diet :"Herbivore",
        friendly:"true"


    },
    crocodile:{
        classification: "Reptile",
        appearance: ["Long, wide mouth with many teeth","Close relatives to dinosaurs",
        "Looks like a big lizard"],
        habitat:"Rivers",
        lifespan:10,
        diet:"Carnivore",
        friendly:"false"
    },

    ostrich :{
        classification:"Bird",
        appearance:["Big, tall bird","2 legs","Has a long neck"],
        habitat:"Grasslands",
        lifespan: 45,
        diet:"Herbivore",
        friendly:true
    },
    shark:{
        classification:"Fish",
        appearance: ['Sharp teeth','Has fins','Has gills'],
        habitat:'Water',
        lifespan:30,
        diet:"Carnivore",
        friendly:true
    }
    

};

console.log(Object.values(animals));