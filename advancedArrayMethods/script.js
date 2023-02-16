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


//map
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


//filter
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

//some - runs a callbcak on each value in an array, if the callback returns true for at least one single value, it turns true

const words = [
    "dfgslkjhfglskjfg",
    "sdfgkjshbdfgkjshf",
    "sd,kfjvhgsbdkfujghbskdjfhvbskdjfhgvs",
    "hi",
    "let",
    "me",
    "dewit",
    "foru",
    "kermit"
]

words.some(function (word) {
    return word.length > 20
})

words.some(function (word) {
    return word.length == 2
})

words.some(function (word) {
    return word.indexOf("kermit") !== -1
})

//every - returns boolean if callback is true for every element in array
words.every(function (word) {
    return word.length >= 2;
})

function allStrings(arr) {
    return arr.every(function (word) {
        return typeof word === "string"
    })
}

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true
        }
    }
    return false
}

mySome([1, 2, 3, 4], function (n) {
    return n === 3
})

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === false) {
            return false
        }
    }
    return true
}

myEvery([1, 1, 1, 1, 1, 1, 1], function (n) {
    return n === 1
})

//find - returns first value that matches callback function
const scores = [
    31,
    25,
    68,
    24,
    99,
    76,
    80,
    90,
    99,
    83,
    33,
    2,
    69,
    69,
    87,
]

scores.find(function (score) {
    return score > 60
})

scores.find(function (score) {
    return score % 2 === 0
})

scores.filter(function (score) {
    return score > 60
})

//findIndex - returns index of first value that matches callback, does not give value at index
scores.findIndex(function (score) {
    return score > 60
})

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return arr[i]
        }
    }
}

function myFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return i
        }
    }
    return -1
}

//reduce - taking some array of values and evaluating it to a single value in the end 
const numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const total = numms.reduce(function (accumulator, currentVal) {
    //accumulator will store the value produced by the previous execution of the callback 
    //currentVal refers to each individual element of the array
    //when accuumulator doesnt have a starting value you can set one after the {} in this case 0
    console.log(`Accumulator is: ${accumulator}`)
    console.log(`CurrentVal is: ${currentVal}`)
    let updatedSum = accumulator + currentVal
    console.log(`Updated Sum is : ${updatedSum}`)
    console.log("================")
    return accumulator + currentVal
}, 0)

const total2 = numms.reduce(function (sum, num) {
    return sum + num
}, 0)

const max = numms.reduce(function (currentHighest, num) {
    //if no value is passed at accumulator then it starts at index 0 of the array 
    //then currentVal will start at index 1
    if (num > currentHighest) {
        return num
    }
    return currentHighest
})

const min = numms.reduce(function (min, currentVal) {
    //if no value is passed at accumulator then it starts at index 0 of the array 
    //then currentVal will start at index 1
    if (currentVal < min) {
        return currentVal
    }
    return min
})

const people = [
    { name: "Timbo", age: 26 },
    { name: "Shawn", age: 19 },
    { name: "Gus", age: 18 },
    { name: "Jules", age: 21 },
    { name: "Lassie", age: 29 },
    { name: "Carlton", age: 26 },
    { name: "Ohera", age: 21 },
    { name: "Burton", age: 19 },
    { name: "Spencer", age: 18 },
    { name: "Henry", age: 36 },
    { name: "Yin", age: 18 },
    { name: "Yang", age: 18 },
    { name: "Karen", age: 26 },
    { name: "Vic", age: 18 },
]

const ages = people.reduce(function (peopleAges, currentPerson) {
    const age = currentPerson.age;
    console.log(peopleAges)
    if (peopleAges[age] == null) {
        peopleAges[age] = 1
    } else {
        peopleAges[age] += 1
    }
    return peopleAges
}, {})

