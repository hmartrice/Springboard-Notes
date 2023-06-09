window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Let's start up");
    $("img").attr("class", "image-center");
    $("p").eq(-1).remove();
    $("#title").attr("style", (event) => {
        let int = Math.floor(Math.random() * 100);
        return "font-size:" + int + "px ";
    });

    $("ol").append("<li>Random Stuff</li>");
    $("li").remove();
    $("ol").append("<p>Sorry for the existence of that list</p>");

    $(".row.mb-5").on("change", (event) => {
        $("body").attr("style", (event) => {
            let r = Number($("input").eq(0).val());
            let g = Number($("input").eq(1).val());
            let b = Number($("input").eq(2).val());
            return `background-color: rgb(${r},${g},${b})`;
        })
    })

    $("img").click(function () {
        $(this).remove();
    });

    $("body").append($("<h1>Movie App</h1>"));
    $("body").append($("<h4>Title</h4> <input type ='text' />"));


})
