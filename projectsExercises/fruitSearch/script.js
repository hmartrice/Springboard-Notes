const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const listOfFruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let text = ""

function search() {
    let results = listOfFruit.filter((word) => {
        return word.toLowerCase().includes(text.toLowerCase())
    });
    return results;
}

function searchHandler(e) {
    let letter = e.key
    if (letter == "Backspace") {
        text = text.slice(0, -1)
    } else {
        text = text + letter
    }
    console.log(text)
    console.log(search())
    showSuggestions(search(), text)
}

function showSuggestions(results, inputVal) {
    for (let x of results) {
        let fruit = document.createElement("li")
        fruit.setAttribute("id", x)
        fruit.innerText = x
        suggestions.appendChild(fruit)
    }
}

function useSuggestion(e) {
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);