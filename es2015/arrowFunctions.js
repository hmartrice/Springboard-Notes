//  const add = function(x,y){
//     return x+y
//  }

const add = (x, y) => {
    return x + y
}
//same thing as above just slightly faster to write and consolidated

// [2, 43, 5, 56324, 15, 1, 5, 696969696, 1313424, 24].reduce(function (max, current) {
//     return Math.max(max, current)
// })

// [2, 43, 5, 56324, 15, 1, 5, 696969696, 1313424, 24].reduce((max, current) => {
//     return Math.max(max, current)
// })

// //**************************
// //ARROR FUNCTION SHORTCUTS
// //**************************

// [1, 2, 3, 4, 5, 6].forEach(element => {
//     console.log(element * 10)
// })
// //when you have multiple parameters you need another set of paratheses
// [1, 2, 3, 4, 5, 6].forEach((n, i) => {
//     console.log(n * 10)
//     console.log(i)
// })

const greet = () => { console.log("hiiii") }

let nums = [1, 2, 3]
let numsSquared = nums.map(n => n ** 2)

// [1, 2, 3, 4, 5, 6].filter(function (num) {
//     return num % 2 === 0
// })

// [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0)

const double = (arr) => arr.map(val => val * 2)

const cat = {
    name: "Toast",
    cry: function () {
        return `${this.name} has begun to cry`
    }
}

