// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Create an object that represents a cat.
// It should have properties for tiredness, hunger, loneliness and happiness.
// You can set all of these properties to 0 by default.

class Cat {
    constructor(c, t, h, l, hh, n) {
      this.species = c;
      this.tiredness = t;
      this.hunger = h;
      this.loneliness = l;
      this.happiness = hh;
      this.name = n;
    }
  }
  
  let boots = new Cat('cat', 1, 50, 60, 200, boots);
  let hunger = new Cat("0");
  let loneliness = new Cat("0");
  let happiness = new Cat("0");
  
  console.log(boots);

// B) Instantiate a cat called 'boots' with the Cat class.

// C) What do you see when you console.log(boots)?
Cat {
    species: 'cat',
    tiredness: '10',  hunger: 50,
    loneliness: 60,  happiness: 200,
}
// D) What if I want to output just boots' species?
cat.species= cat;

// E) Boots' name is not part of its object.
//    Update the class above to accept have a name parameter
//    and pass Boots' name as an argument.
