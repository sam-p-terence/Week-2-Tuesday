
//creating an object with brackets
//accessing values in an object

let person = {
    firstName: "Terence",
    lastName: "Sam",
    age: 100,
    dob: 1980
}

let terenceRealAge = person.age
let terenceRealAgeCopy = person['age']
let terenceDob = person['dob']

// console.log(terenceRealAge)
// console.log(terenceRealAgeCopy)
// console.log(terenceDob)




//deconstructuring


// let meal = {
//     appetizer: 'chips & sales',
//     entree: 'al pastor burrito',
//     dessert: 'churros',
//     drink: 'dr. pepper',
// }

// // this is the same as: 
// // const dessrt = meal.dessert
// // const drink = meal.drink
// // const bestDrinkOfAllTime = meal.drink

// const {dessert, drink: bestDrinkOfAllTime} = meal

// console.log(dessert)
// console.log(bestDrinkOfAllTime)




//looping through an object

// for (let key in person) {
//     console.log(`My ${key} is ${person[key]}`)
// }

//persion.firstName
//is exactly the same as
// persion ['firstName']

// Adding properties (aka key/value pairs) to an object

person.job = "Devmountain Student"
person['pets'] = ['snake', 'children']

// console.log(person)

// let pet1 = person.pets[0]
// let pet2 = person['pets'][0]

// console.log(pet1)
// console.log(pet2)

// Deleting Properties

delete person['pets']
// delete person.pets
// person.pets.shift()     << deletes the first index from the beggining array
// console.log(person)

// let teams = {
//     team1: ['kyle', 'jared', 'joely', 'egha'],
//     team2: ['bob', 'tommy'],
//     team3: ['sam'],
//     team4: ['samantha'],
// }

// // team 4 lost, lets take them out of the running:
// delete teams.team4

// console.log(teams)


//classes
class Pokemon {
    constructor(name, types, weakness, level, hp, attack) {
        this.name = name
        this.types = types
        this.level = level
        this.weakness = weakness
        this.hp = hp
        this.attack = attack
    }
    sayName() {
        console.log(this.name + '!')
    }

}

let snivy = new Pokemon(
    'Snivy',
    ['grass'],
    "fire",
    5,
    18,
    10
)

let typhlosion = new Pokemon (
    'Typhlosion',
    ['fire'],
    'water',
    36,
    119,
    85,

)

// console.log(snivy)
// console.log(`snivy's level is ${snivy.level}`)

// console.log(typhlosion)
// console.log(`typhlosion's level is ${typhlosion.level}`)


// typhlosion.sayName()

class Animal {
    constructor(weightInPounds,heightInInches) {
        this.weightInPounds = weightInPounds
        this.height = heightInInches
    }
    printAnimalName(){
        console.log(this.name)
    }
}

class Bird extends Animal {
    constructor(name,weightInPounds,heightInInches,wingSpanInInches,flightSpeedInMPH) {
        super(name,weightInPounds,heightInInches)
        this.wingSpanInInches = wingSpanInInches
        this.flightSpeedInMPH = flightSpeedInMPH
    }
    birdShreek() {
        console.log('Keeyaaah!')
    }
    increaseFlightSpeed(speedIncrease) {
        this.flightSpeedInMPH = this.flightSpeedInMPH + speedIncrease
        // or we can use this.flightSpeedInMPH = this.flightSpeedInMPH += speedIncrease
    }
}

// let animal1 = new Animal('oyster',0.3,2)
// console.log(animal1)
// animal1.printAnimalName()

let bird1 = new Bird('big bird', 350, 94, 60, 0)
console.log(bird1)
// bird1.birdShreek()
bird1.increaseFlightSpeed(10)
console.log(bird1)