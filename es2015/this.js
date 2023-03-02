const cat = {
    name: "Blue",
    breed: "Black",
    dance: function (dance) {
        console.log("This is, ", this);
        console.log(`Meow, I am ${this.name} and i like to ${dance}`);
    }
};
cat.dance("salsa")
const blueDance = cat.dance;
blueDance("swing")
// The value of this changes when called directly in an object
// will refer to the object it is inside.
// When this is called outside of an object it refers to the window
// This is because in JS there are no stand alone functions,
// everything is a method to an object.
// So when there's a function without an object, this refers to the
// global object window.

// A neat way to remember it is that "this" will refer to what is
// left of the dot.
// cat.dance("salsa") the cat obj is to the left of the dot
// blueDance("swing") there is no direct obj, so it refers to window
// blueDance("swing") is the same as window.blueDance("swing")

////////////////////
// Strict Mode 
// When using strict mode the value of this will be set to undefined


class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    dance(dance) {
        console.log("This is ", this);
        console.log(`Meow, I am ${this.name} and i like to ${dance}`);
    }
}

const kitty = new Cat("Cheeto", "Calico");
const kittyDance = kitty.dance; //This will return undefined 


// .call a way of specifying what this should be

blueDance("Swing") // this should be refering to the window right now
blueDance.call(cat, "swing") // Instead of window being the obk
// cat is now the object and subject of this

const dog = {
    name: "Miso",
    breed: "Jack Russel Terrier"
}

blueDance.call(dog, "hip hop")// Now instead of defaulting 
// to the window as the this reference. this has been set to the 
// dog object. The function dance that comes from the cat class 
// still works and is the second argument passed into call()

// WHen using call() you are not mutating or changing anything, it
//is a one time use function. 


// .bind perma-binds a function to a context 
blueDance.call(dog, "twerk")
blueDance.call(dog, "twerk")
blueDance.call(dog, "twerk")
blueDance.call(dog, "twerk")
blueDance("twerk") // this reverts back to window
// Instead of writing a call() multiple times you can bind 
const boundDance = blueDance.bind(dog)
boundDance("twerk") // this is set to dog 
boundDance("jazz hands") // this is still set to dog

///////////////
// Binding Arguments 
// With bind() you can pass arguments through and perma-bind them
//to a function.

const boundDisco = blueDance.bind(dog, "disco")
//Now you just need to call boundDisco() without any arguments in it
boundDisco()

// You can even use it without having to bind this but perma-bind
//a argument to a function

function applySalesTax(taxRate, price) {
    return price + price * taxRate
}

const caSalesTax = applySalesTax.bind(null, 0.0725)
caSalesTax(19.99) // returns the calculate value just with a preset
//

function listToys(...toys) {
    for (let x of toys) {
        console.log(x)
    }
}

const listOfToys = listToys.bind(null, "ygo cards", "naruto games")
listOfToys() //logs the preset values "ygo cards" and "naruto games"
listOfToys("thing3", "thing4") //logs presets and then both things

////////////////
// Binding Callbacks
const btnA = document.querySelector("#a")
const btnB = document.querySelector("#b")
const btnC = document.querySelector("#c")

function popUp(msg) {
    alert("New Message: " + msg)
}

// document.querySelector("#a").addEventListener("click", popUp("hello"))
// btnA.addEventListener("click", popUp("this wont work"))
// These won't work because at the moment the popUp believes the 
// obj is the window 

// btnA.addEventListener("click", popUp.bind(null, "Button A says hi"));
btnB.addEventListener("click", popUp.bind(null, "Button B says hi"));
btnC.addEventListener("click", popUp.bind(null, "Button C says hi"));

// This batch of code can be cleaned up with bind()
// btnA.addEventListener("click", function () {
//     popUp("You need a job")
// })
// btnB.addEventListener("click", function () {
//     popUp("You will be stronger")
// })
// btnC.addEventListener("click", function () {
//     popUp("You will be okay")
// })

///////////////////////////
// Arrow Functions and This
const greeter = {
    msg: "I like watches",
    // sayHi: () => {
    //     alert(this.msg) // will alert undefined
    //     console.log(this) // returns the window
    // }
    sayHi: function () {
        alert(this.msg) // keyword this works in this option
    },
    waitAndGreet: function (delay) {
        // console.log(this) // this equals greeter obj
        // setTimeout(function () {
        //     console.log(this) // this equals window
        //     alert("Hiiiiiiii");
        // }, delay);

        //////////////// Can also be written as 

        // let callback = function () {
        //     alert(this.msg);
        // };
        // setTimeout(callback.bind(this, delay))

        //////////////// Can also be written as 

        // setTimeout(
        //     function () {
        //         alert(this.msg);
        //     }.bind(this, delay)
        // );

        /////////////// Now with arrow function
        setTimeout(() => {
            alert(this.msg);
        }, delay)

    }
}
// Arrow functions do not make their own this. That is why this in
// the first sayHi returns the window.
// It is not recommened to write arrow functions in objects. 
