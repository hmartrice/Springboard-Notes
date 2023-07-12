// Selecting Elements 
// $("p") will select all <p>
// Will return a jQuery object. Most of methods are designed to 
//work with jQuery objects 

//$("h1").get() //will get me an array containing the dom elements
//$("p").get() will return an array for all p dom elements 
//$("p").get()[0] will return the first p element

//////////// 
// jQuery Methods
$("h1").text(); //returns innerText of element
$("h1").text("Leeerrooooooy"); //returns innerText of element then
//sets the innerText to the new value inputted

$("li").text("JENKINS")
// $("li").text("LEEROY") // Between these two lines, the list's 
//value will toggle between "JENKINS" and "LEEROY"
$("li").html() // returns back the html of the first element 
$("li").html("<b>BOLDDDDDDD</b>") // Or can update every element
$("a").attr("href") // returns first href of a elements
// $("a").attr("href", "ANY href") // changes all hrefs of a elements to
//passed arguement. I commented out because I don't want to change
//all of them
$("#NL").attr("class", "testLi") // Changed a attr of element by 
//adding class value 
$("#NL").text("LETSSS GOOOOOO")

const yosemiteImg = { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/320px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg" }
$("img").attr(yosemiteImg); //takes in object and sets it across all
//img elements, thus changing all tahoes to yosemit

$("input").val()
$("input").eq(0) //returns back value of index passed. 
$("input").eq(3) //returns 4th element 
$("input").eq(0).val() // is the same as ${"input"}.val() 

$("input").val("") //will clear all the values in input elements
$("input").eq(0).val(26)
///////////////////
//CSS and Classes
$("li").css("color")
$("li").css("font-size")// with just one argument will return value
$("li").css("font-size", "28px") //second argument sets value

const normTealStyles = { color: "teal", "font-size": "16px" }
$("li").css(normTealStyles)


$("a").css("color", "red")
$("li").eq(0).attr("class", "highlight")
$("li").addClass("highlight")
$("li").eq(4).removeClass("highlight")

//////////////////////
// jQuery Method Chaining

//instead of

// let todoContainer = document.querySelector("#todo-container");
// todoContainer.style.color = "red";
// todoContainer.innerText = "Look at me";
// todoContainer.addEventListener("click", function (event) {
//     console.log("clicked")
// })

//You can shorthand it by chaining with jquery
// $("#todo-container")
//     .css("color", "red")
//     .text("look at me")
//     .on("click", function (event) {
//         console.log("clicked")
//     })

//////////////////////////////////
// jQuery Traversal
const firstClass = $(".class").eq(2)
firstClass.next()

///////////////////////////////
//Appending and Removing Elements
$(".classes").append("<li class='class'>English</li>")
$(".class").append("<input type='checkbox'/>")
$('.class').prepend("<input type='checkbox' />")
$('.class').prepend("<input type='checkbox' />")
$("<h1>Append Example</h1>").css("color", "blue").appendTo(".classes")

//////////////////////////
// Event and delegation / Animation
$("img").click(function () {
    // alert("hi")
    // $(this).fadeOut(3000, function () {
    //     $(this).remove();
    // });
    $(this).animate({
        opacity: 0,
        width: "50px" //Do not animate width (poor performance)
    }, 1500, function () {
        $(this).remove();
    })
})
//jquerys on() works like addEventList ner
//click() and on("click") are very similar but the former is a 
//shorthand for the latter
//on() accepts optional argument between type of event and callback

$(".class").on("click", function () {
    alert("Hey you clicked me");
    $(this).remove();
})


