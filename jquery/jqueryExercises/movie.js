let movies = []

$("#form").on("submit", function (event) {
    event.preventDefault();
    let data = [$("#title").val(), $("#rating").val()];
    $("#movieList").append(createRow(data));
    resetForm();
})

function resetForm() {
    $("input").val("");
}

function createRow(data) {
    $("#movieList").append(
        `<tr>
            <td>Movie Title: ${data[0]}</td>
            <td>Rating: ${data[1]}</td>
            <td>
                <button id="delete">
                    Delete
                </button>
            </td>
        </tr>`
    )
}

$('table').on('click', 'button', function (event) {
    $(this).closest('tr').remove()
})