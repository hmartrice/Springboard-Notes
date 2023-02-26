const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const listOfFruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
    let results = listOfFruit.filter((word) => {
        return word.toLowerCase().includes(input.value.toLowerCase().trim())
    });
    if (input.value === "") {
        results = []
    }
    return results;
}

function isPopulated() {
    return suggestions.childNodes.length
}

function searchHandler() {
    showSuggestions(search())
}

function addFruit(results) {
    for (let x of results) {
        let fruit = document.createElement("li")
        fruit.setAttribute("id", x)
        fruit.innerText = x
        suggestions.appendChild(fruit)
    }
}

function clearFruits() {
    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.firstChild)
    }
}

function showSuggestions(results) {
    if (isPopulated() === 0) {
        addFruit(results)
    } else {
        clearFruits()
        addFruit(results)
    }
}

function useSuggestion(e) {
    console.log(e.target)
    input.value = e.target.id
    clearFruits()
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// test