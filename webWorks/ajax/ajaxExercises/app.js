const term = $("#term");
const results = $("#list");

function searchClick(res) {
    let lengthResults = res.data.length;
    for (let i = 0; i < lengthResults; i++) {
        let newItem = $("<li>");
        let newGif = $("<img>", { src: res.data[i].images.original.url })
        newItem.append(newGif);
        results.append(newItem);
    }
}

$("#search").on("click", async function (event) {
    event.preventDefault();
    let termVal = term.val();
    term.val("");
    let key = "GYwuurGnsXJFLNImKM2Qx2zbgW7OzQEP";
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${termVal}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    searchClick(res.data);
    console.log(res)
})

$("#remove").on("click", function () {
    results.empty();
})