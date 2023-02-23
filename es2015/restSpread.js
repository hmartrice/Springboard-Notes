function max() {
    console.log(arguments)
    console.log(Array.from(arguments))
}

function sum() {
    const args = Array.from(arguments)
    return args.reduce((sum, val) => {
        return sum + val
    })
}

// Arguments doesn't exist in arrow functions

// Rest and Spread Operator is ... 
// Rest is the last parameter defined in a function and will evaluate to an array 
// of all additional arguments passed in

function doSomething(...restOfArgs) {
    console.log(restOfArgs)
}

function oneOrMoreParameters(first, second, third, ...restOfArgs) {
    return {
        firstThree: [first, second, third],
        rest: restOfArgs
    }
}

const filterbyType = (type, ...vals) => {
    return vals.filter(v => typeof v === type)
}

//Spread can be used inside a parameter, array, or object 

function takesFour(one, two, three, four) {
    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
}

const names = ["Tim", "Toast", "Cheeto", "Dog"]

takesFour(names) // will print out once and have three undefines
takesFour(...names) // will spread the data of names, having four separate prints 

const fakeArray = ["Tim", "Toast", "Cheeto", "Dog"]
const newArray = ["Snow", ...fakeArray, "Dog2"]

const greenTeas = ["Jasmine", "Matcha", "Sencha"]
const oolongTeas = ["Green Oolong", "Dark Oolong"]
const herbalTeas = ["Chamomile", "Hibiscus"]
const coffees = ["French Roast", "Light Roast"]

const bevArray = [...greenTeas, ...oolongTeas, ...herbalTeas, ...coffees]
const failBevDic = { ...greenTeas, ...oolongTeas } // this case the elements of oolongTeas 
//replaces the first two elements of greenTeas
const bevDic = { Teas: [...greenTeas, ...oolongTeas, ...herbalTeas], coffee: [...coffees] }

const tea = {
    type: "oolong",
    name: "winter sprout",
    origin: "taiwan"
}

const tea2 = { ...tea }

// tea === tea2 = false

const tea3 = { ...tea, price: 22.99 }
const newTea = { ...tea, name: "newNameOfTea" }

const teaData = {
    steepTime: "3mins",
    brewTemp: 195,
    origin: "Japan"
}

const fullTea = { ...tea, ...teaData, origin: "Tim's Place" }