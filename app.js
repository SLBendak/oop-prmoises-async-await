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