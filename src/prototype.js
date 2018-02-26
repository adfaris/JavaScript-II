/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes:
  GameObject
    createdAt
    dimensions
    destroy() // prototype method -> returns the string 'Game object was removed from the game.'*/

    function GameObject (gameobj) {
      this.createdAt = gameobj.createdAt;
      this.dimensions = gameobj.dimensions;
    }

    GameObject.prototype.distroy = function(){
      console.log('Game object was removed from the game');
    }
/*
  NPC
    hp
    name
    takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // should inherit destroy() from GameObject's prototype
*/
    function NPC(npcObj){
      GameObject.call(this,npcObj);
      this. hp = npcObj.hp;
      this.name = npcObj.name;
    }

    NPC.prototype.takeDamage = function(){
      console.log(`${this.name} took damage`);
    }
/*
  Humanoid
    faction
    weapons
    language
    greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through NPC
    // should inherit takeDamage() from NPC
*/
    function Humanoid (humanoidObj){
      GameObject.call(this.humanoidObj);
      this.faction = humanoidObj.faction;
      this.weapons = humanoidObj.weapons;
      this.language = humanoidObj.language
    }

    Humanoid.prototype.greet = function(){
      console.log(`${this.name} offers greetings in ${this.language}`);
    }
/*
  Inheritance chain: Humanoid -> NPC -> GameObject
  Instances of Humanoid should have all of the same properties as NPC and GameObject.
  Instances of NPC should have all of the same properties as GameObject.

  Example:
*/
  const hamsterHuey = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Hamster Huey',
    faction: 'Gooey Kablooie',
    weapons: [
      'bubblegum',
    ],
    language: 'Hamsterish',
  });

  hamsterHuey.greet(); // returns 'Hamster Huey offers a greeting in Hamsterish'
  hamsterHuey.takeDamage(); // returns 'Hamster Huey took damage.'
  hamsterHuey.destroy(); // returns 'Game object was removed from the game.'



/* eslint-disable no-undef */

function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}
GameObject.prototype.destroy = function destroy () {
  return 'Game object was removed from the game.';
};

function NPC(options) {
  GameObject.call(this, options);
  this.hp = options.hp;
  this.name = options.name;
}
NPC.prototype.destroy = Object.create(GameObject.prototype);

NPC.prototype.takeDamage = function takeDamage () {
  return 'NPC took damage.';
};

function Humanoid(options) {
  NPC.call(this, options);
  this.faction = options.faction;
  this.weapons = options.weapons;
  this.language = options.language;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.greet = function greet() {
  return 'Humanoid offers a greeting in Humanoid.';
};


module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
