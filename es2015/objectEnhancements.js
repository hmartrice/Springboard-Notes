// function makePerson(first, last, age) {
//     return {
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true
//     }
// }

//Shorthand for when you want a keyname to match its value   

function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isAlive: true
    }
}

// const mathStuff = {
//     x: 200,
//     add :function(a,b){
//         return a+b
//     },
//     square : function(a){
//         return a*a
//     }
// }


//Quicker and easier to read way of adding functions to an object
//Arrow functions don't work here
const mathStuff = {
    x: 200,
    add(a, b) {
        return a + b
    },
    square(a) {
        return a * a
    }
}

// function makeColor(name, hex) {
//     const color = {}
//     color[name] = hex
//     color[hex] = name
//     return color
// }

// Instead of having to make an object and assign a key-value pair you can
// call the value of your parameters and set that value to be a keyname for your return object

function makeColor(name, hex) {
    return {
        [name]: hex,
        [hex]: name
    }
}

const mystery = {
    [6 + 7]: "thirteen"
}