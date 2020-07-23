// Object Oriented Programming

//Prototypal Inheritance

const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"
};
console.log(dog);

const dogTwo = {
    name: "Rocoo",
    color : "brown"
};

dogTwo.__proto__ = dog;
console.log(dogTwo.name);
console.log(dogTwo);

// make two objects and one object needs to inherit from the other

const wagon = {
    wheels: "four",
    roof: "sometimes",
    horsepower: "a couple"
}

const convertible = {
    horsepower: "many more"
}

convertible.__proto__ = wagon;

console.log(convertible);



// Constructor Function

function User(name) {
    this.name = name;
}
// new is key function of this 
let adam = new User('Adam');
let pete = new User('Pete');

console.log(adam.name);
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true)
console.log(steph);
///////////////////////////////
function Fruit(name, round, berry) {
    this.name = name;
    this.round = round;
    this.berry = berry;
}
let orange = new Fruit('Orange', true, false)
let blueberry = new Fruit('Blueberry', true, true)
let banana = new Fruit('banana', false, false)
console.log(orange);

