const filterOutOdss = (...nums) => {
    return nums.filter(num => num % 2 === 0)
}

const findMin = (...nums) => {
    return nums.reduce((min, currentVal) => {
        return Math.min(min, currentVal)
    })
}

const mergeObjects = (obj1, obj2) => {
    return obj3 = { ...obj1, ...obj2 }
}

const doubleAndReturnArgs = (arr, ...nums) => {
    let double = [...arr, ...nums]
    return double.map(n => n * 2)
}

//slice and dice
const removeRandom = (items) => {
    let copy = [...items]
    let r = Math.floor(Math.random() * items.length)
    copy.splice(r, 1)
    return copy
}

const extend = (arr1, arr2) => {
    return arr3 = [...arr1, ...arr2]
}

const addKeyVal = (obj, key, val) => {
    return copy = { ...obj, [key]: val }
}

const removeKey = (obj, key) => {
    let copy = { ...obj }
    delete copy[key]
    return copy
}

const combine = (obj1, obj2) => {
    return copy = { ...obj1, ...obj2 }
}

const update = (obj1, key, val) => {
    return copy = { ...obj1, [key]: val }
}