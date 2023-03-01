
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.numWheels = 4
    }
    honk() {
        return "Beep"
    }
    toString() {
        const { make, model, year } = this;
        return `The vehicle is a ${make} ${model} from ${year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine() {
        return "VROOM"
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    add(vehicle) {
        if (vehicle instanceof Vehicle) {
            if (this.vehicles.length === this.capacity) {
                return "Sorry, we're full"
            }
            this.vehicles.push(vehicle)
            return "Vehicle added!"
        } else {
            return "Only vehicles are allowed in here!"
        }
    }
}

const blueberry = new Car("Honday", "Accord", 2004)
const bike = new Motorcycle("Triumph", "Bonniville T20", 1984)
const garage = new Garage(3)