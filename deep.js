function deepIteration(target){
    if(typeof target === "object"){
        for (const key in target){
            deepIteration(target[key])
        }
    }
    else if(Array.isArray(target)){
        for (const element of target){
            deepIteration(element)
        }
    }
    else{
        console.log(target)
    }
}


const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };
deepIteration(userInfo);