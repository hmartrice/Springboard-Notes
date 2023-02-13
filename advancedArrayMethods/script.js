function holler() {
    console.log("hey ya")
}

const whisper = function () {
    console.log("ppsstssst")
}

function add(x, y) {
    return x + y
}

function substract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function power(x, y) {
    return x ** y
}

const mathFuncs = [add, substract, multiply, divide, power];

//functions as parameters
// setTimeout(whisper, 4000)

function doMath(a, b, mathFunc) {
    return mathFunc(a, b)
}

// passing through an annoymous function
// doMath(2, 30, function (a, b) {
//     console.log(a ** b)
// })

function doAllMath(a, b, mathFuncs) {
    for (let func of mathFuncs) {
        console.log(doMath(a, b, func))
    }
}

const colors = ["blue", "red", "orange", "green", "yellow"]

// colors.forEach(console.log)
// colors.forEach(function (val, i) {
//     console.log(val.toLocaleUpperCase())
//     console.log(i)
// })

const numbers = [1, 2, 4, 5, 7]
const neg = numbers.map(function (num) {
    return num * -1
})

const doubles = numbers.map(function (num) {
    return (num * 2)
})

const todos = [
    {
        id: 1,
        text: "feed cats",
        priority: "high"
    },
    {
        id: 2,
        text: "scoop litter",
        priority: "medium"
    },
    {
        id: 3,
        text: "buy new food",
        priority: "low"
    },
    {
        id: 4,
        text: "buy new toys",
        priority: "high"
    },
]

const todoText = todos.map(function (todo) {
    return todo.text
})

const links = Array.from(document.querySelectorAll("a"))
const urls = links.map(function (a) {
    return a.href
})

function subOne(x) {
    return x - 1
}

function myMap(arr, callback) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const val = callback(arr[i], i, arr)
        newArr.push(val)
    }
    return newArr
}

const priorityMap = myMap(todos, function (todo) {
    return todo.priority
})

const repeatedStrings = myMap(["a", "b", "c", "d", "e"], function (str, idx, arr) {
    return str.repeat(idx)
})

let letters = ["a", "b", "b", "a", "c", "d", "e", "d", "b", "a", "f", "a", "b"]
const abs = letters.filter(function (letter) {
    return letter == "b" || letter == "a"
})

function myFilter(arr, callback) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}