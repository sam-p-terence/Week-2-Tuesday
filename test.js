class Dog {
    constructor (age, color) {
        if (age > 12) {
            this.age = 1000000
        } else {
            this.age = age
        }
        this.color = color
    }
}

let dog1 = new Dog(10, 'red')
let dog2 = new Dog(13, 'blue')
console.log(dog1.age)
console.log(dog2.age)