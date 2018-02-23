// Part 1
// Create a class called User using the ES6 class keyword.
// The constructor of the class should have a parameter called `options`.
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

// code here
class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }

  comparePasswords () {
    if (options.password = this.password)
    return true;
  }

}
const checkPasswd = new User({email:'adfaris@gmail.com', password:'123456789'});
console.log(checkPasswd);
checkPasswd.comparePasswords('12345600');

// Part 2
// Create a class called `Animal` and a class called `Cat` using ES6 classes.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age after incrementing it.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.

//code here

// class Animal {
//   constructor(obj){
//     this.type = obj.type;
//     this.name = obj.name;
//     this.sound = obj.sound;
//   }

//   differentSound(){
//     return this.sound;
//   }
// }

// class Cat
// extends Animal{

// }
// }


/* eslint-disable no-undef */

module.exports = {
  User,
  Cat,
};
