const teaOrder = {
    variety: "oolong",
    teaName: "winter sprout",
    origin: "taiwan",
    price: 12.99,
    hasCaffiene: true,
    quantity: 3,
    brewTemp: 185
}

// const price = teaOrder.price;
// const quantity = teaOrder.quantity
// const teaName = teaOrder.teaName
// Above method for retrieving attributes can be long and repetitive 


const { price, quantity, teaName, ...other } = teaOrder
//Destructuring doesn't change the original object 
//Its a way to unpack values 
//You can use rest to unpack the rest of the items in an object 
//Like before the rest element needs to come in the end
const { origin } = teaOrder

const { country } = teaOrder // will result in undefined

const { brewTemp = 175 } = teaOrder
//You can set a default value when destructuring 

const { teaName: tea } = teaOrder// this will change the key in the object 
//teaName no long 

function checkout(tea) {
    const { quantity, price } = tea
    return quantity * price
}

////////////////////////////////////////
//Destructuring Arrays

const myFavoriteThings = ["climbing", "movies", "cooking",
    "lifting heavy-ass weights", "watches", "beer"]
const [first, second, , fourth, ...others] = myFavoriteThings //You can skip variables 

const teaOrder2 = {
    variety: "oolong",
    teaName: "winter sprout",
    origin: "taiwan",
    price: 18.99,
    hasCaffiene: true,
    quantity: 30,
    brewTemp: 185
}

// function getTotal(tea) {
//     const { q, t } = tea
//     return q * t
// }

//You can destructure when passing an object through as a parameter v                                                                                                                                                                                 vc                                                                                                 xzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

function getTotal({ quantity, price }) {
    return quantity * price
}

////////////////////////////////////////
// Nested Destructuring 

const theThing = {
    title: "The Thing",
    releaseDate: "June 25, 1982",
    versions: [
        { version: "Original", runtime: 109 },
        { version: "Director's Cut", runtime: 115 }
    ],
    director: "John Carpenter",
    rated: {
        rating: "R",
        advisory: "Rated R for violence"
    },
    plot: `Based on the 1938 John W. Campbell Jr. novella Who Goes There?, it tells the 
    story of a group of American researchers in Antarctica who encounter the eponymous 
    "Thing", a parasitic extraterrestrial life-form that assimilates, then imitates, other 
    organisms. The group is overcome by paranoia and conflict as they learn that they can 
    no longer trust each other and that any of them could be the Thing.`,
    ratings: [
        { Source: "IMDB", value: "8.2/10" },
        { Source: "Rotten Tomatoes", value: "84%" },
        { Source: "Metacritic", value: "57%" }
    ]
}

// const {rated} = theThing
// const {rating, advisory} = rated

const { rated: { rating, advisory } } = theThing //the above can be rewritten like this
//However unlike the above example, rated is not a variable. Only rating & advisory 

const { ratings: [imd, rottenTom, Metacritic] } = theThing

const {
    ratings: [
        { value: imdbRating },
        { value: rottenTomRating },
        { value: metacriticRating }
    ],
    versions: [
        { runtime: originalRuntime },
        { runtime: directorsCutRunTime }
    ]
} = theThing


//Destructuring Swap
let delicious = "Shrimp Paste";
let disgusting = "chili oil";

//When swapping values this doesn't work as the assigment gets overriden and 
//the previous one is lost. You could have a temp 3rd variable 

// delicious = disgusting
// disgusting = delicious 

//Here we are making a temp variable
// let temp = delicious
// delicious = disgusting
// disgusting = temp

//Here we are creating an array for reference and another to set the correct values 
// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

[disgusting, delicious] = [delicious, disgusting];