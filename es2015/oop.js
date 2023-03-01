const color = "blue";
const obj = {
    multi: (x, y) => {
        return x * y
    },
    add: function (x, y) {
        return x + y
    },
    square(x) {
        return x * x
    }
}
obj.color = "#3536FF"
obj[color] = "3536FF"
obj[1 + 4 - 2 * 10 + 250] = "3536FF"

Object.keys(obj) //(3) ['235', 'color', 'blue']
Object.values(obj) //(3)['3536FF', '#3536FF', '3536FF']

for (let [x, y] of Object.entries(obj)) {
    console.log(x, y)
}
let triangle = {
    a: 3,
    b: 5,
    getArea: function () {
        return (this.a * this.b) / 2
    },
    getHyp: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

function Triangle(a, b) {
    this.a = a;
    this.b = b;
    this.getArea = function () {
        return this.a * this.b
    };
    this.getHyp = function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

//This is a function version of the object
//Using the constructor function new, you can create new 
//instances of objects. Though originally there is no return value
//the new keyword creates a blank object. 

// const newTriangle = new Triangle(3, 4)

///////////////////////////////////
// Classes

class Triangles {
    greet() {
        console.log("hello");
    }
    constructor(a, b, c) {
        //will be automatically called 
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        return (this.a * this.b) / 2
    }
    display() {
        return ("I am a triangle")
    }
}

const tri = new Triangles(1, 2, 3);

/////// Super
//Any takes all properties of the parent class 
//The child class can over ride the parent class methods i.e. display

class RightTriangles extends Triangles {
    constructor(a, b, c) {
        super(a, b, c)
    }
    display() {
        return "right" + super.display()
        //"rightI am a triangle"
        // console.log("I am a right triangle")
        // rightTriangle.display() //"i am a right triangle"
    }
}

const rightTriangle = new RightTriangles(3, 4, 5)


