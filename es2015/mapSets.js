//In maps the keys can be any value 
const myMap = new Map();
myMap.set(7, "seven")
myMap.set("17", "seventeen")
myMap.set(true, true)
//myMap.set([], "empty array") //doenst work as it cant really be called,
// using the get([]) won't return the string as the argument reference isnt the same
// [] === [] is false 
const empty = []
myMap.set(empty, "empty array")
myMap.get(empty) // will return the string since the passed reference is the same one

const add = (x, y) => x + y
const mult = (x, y) => x * y

const funcCalls = new Map();
//Using functions as keys
funcCalls.set(add, 0)
funcCalls.set(mult, 0)

funcCalls.set(add, 1)
funcCalls.set(mult, 9)

funcCalls.get(add) // returns 1 

//Cool way to pass through an array into a map 
const bandData = [
    [3, "3 Doors Down"],
    [9, "Nine Inch Nails"],
    ["182", "blink-182"],
    [true, "Young the Giant"],
    ["karma", "Radiohead"]
]

const bandMap = new Map(bandData)
//When retrieving bandMap, the first value of an element in an array is used as a key, the 
//second is then used as the key's value 
//You can spread out the map back into arrays
console.log([...bandMap])
//set() returns back the whole object, so you can technically chain them
bandMap.set(41, "Sum 41").set(21, "twenty-one pilots")
bandMap.has(41) //returns true

//If you'd like to clear a map: mapName.clear()

bandMap.keys() //returns an iterable of the keys in the map
// [...bandMap.keys()] returns the mapIterator object into an array of keys 

bandMap.size //returns how many key-value pairs are in the object

//forEach() important to note that it is value then key
bandMap.forEach((val, key) => {
    console.log(key + "=>" + val)
})

console.log("/////////////////////////")
for (let [key, value] of bandMap) {
    console.log(key, value)
}

//////////////////////////////////////////////
// Sets
// Only store unique values, any type of value can exist in a set
const facts = ["Eat the rich", "Healthcare for all", "No Billionaires"]
const mySet = new Set(facts)
mySet.add("hello")
mySet.add("hello") // won't add the again

mySet.has("hello") //boolean method
mySet.delete("hello")
mySet.clear()


