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
    this.intro = function(){
        console.log('hi my name is '+this.name);
    }
    
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true)
steph.intro();
///////////////////////////////
function Fruit(name, round, berry) {
    this.name = name;
    this.round = round;
    this.berry = berry;
}
let orange = new Fruit('Orange', true, false);
let blueberry = new Fruit('Blueberry', true, true);
let banana = new Fruit('banana', false, false);
console.log(orange);

//////////////////////////////////

// Class

class Car {
    constructor(year, make, model, color){
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive(){
        console.log('Vroom');
    }
    intro() {
        console.log('This car is a '+this.make+' '+this.model);
    }
}

let tesla = new Car('2020', 'Tesla', 'Model S', 'red');
console.log(tesla);
tesla.intro();

// 
// class GithubProfile {
//     constructor(username, name, url){
//         this.username = username;
//         this.name = name;
//         this.url = url;
//     }
//     intro(){
//         console.log(`My name is ${this.name} and my username is @${this.username}  `)
//     }
// }

// fetch('https://api.github.com/users/SLBendak')
// .then(response => {
//     return response.json();

// })
// .then(data => {
//     console.log(data);
//     let githubURL = data.url;
//     console.log(githubURL);
//     let githubUsername = data.login;
//     console.log(githubUsername);
//     let githubName = data.name;
//     console.log(githubName);

//     let shane = new GithubProfile(githubUsername, githubName, githubURL);
//     console.log(shane);

//     shane.intro();
// })

// fetch('')
// .then(response => {
//     return response.json();

// })
// .then(data => {
//     const lizz = new GithubProfile(githubUsername, githubName, gitURL)

//     lizz.intro();
// })



let isMomHappy = false;

// Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

let willIGetNewPhone = new Promise(resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'iphone',
            color: 'blue'
        }
        resolve(phone);
    } else {
        reject('No phone');
    }
}

// how to check results
willIGetNewPhone.then(result => {
    console.log(result);
});