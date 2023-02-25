const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}

let favNum = 42
const instructor = {
    firstName: "tim",
    [favNum]: "Thats my fav"
}

const instr = {
    firstName: "Tim",
    sayHi() {
        return ("hiiiiii")
    },
    sayBye() {
        return this.firstName + " says bye"
    }
}

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise
        }
    }
}