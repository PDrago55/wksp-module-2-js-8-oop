// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.tiredness = 0;
    this.hunger = 25;
    this.loneliness = 35;
    this.happiness = 45;
  }
  sleep = sleep => {
    this.tiredness -= sleep * 20;
    this.happiness += 13;
  };
  eat = food => {
    this.hunger -= food * 30;
    this.happiness += 20;
  };
  play = toy => {
    this.loneliness += toy * 25;
    this.happiness += 17;
  };
  wait = minutes => {
    this.loneliness += minutes * 0.5;
    this.hunger += minutes * 2;
    this.tiredness += minutes * 0.5;
  };
}

const boots = new Cat("Boots", "Siamese");

// B) Make Boots wait 20 minutes and call then console.log(boots);
console.log(boots);
