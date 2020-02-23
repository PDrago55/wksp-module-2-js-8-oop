// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat...
class Cat {
  constructor(c, b, t, h, l, hh, n) {
    this.species = c;
    this.breed = b;
    this.tiredness = t;
    this.hunger = h;
    this.loneliness = l;
    this.happiness = hh;
    this.name = n;
  }
}
let catName = new Cat("cat", "Siamese fuck", 1, 50, 60, 200, "boots");
let hunger = new Cat("0");
let loneliness = new Cat("0");
let happiness = new Cat("0");

console.log(catName);
