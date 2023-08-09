/*
AJAX - Asynchronous Javascript and XML

- Traditional Web Requests
-- Happens in response to:
--- entering a URL into the browser bar
--- submitting a form
--- clicking a link

-- In all cases
--- browser makes request
--- receives response
--- replaces entire resource with result

- AJAX Web Request
-- Can make a request, load the content, but not have to refresh 
--the page with the new data immediately 
-- AJAX is a technique in JS for sending requests and receiving 
--responses from a server without having to reload the page
-- Info is used to update the DOM when it is called for

- Why use AJAX 
-- Don't need to reload entire page
-- Interactive websites
-- Few full pages loads from server 
-- Less info has to go across network


AJAX with Axios 
- Using cdn 
<script src="http://unpkg.com/axios/dist/axios.min.js"></script> 
*/
// - Making a Simple Request
// axios.get(url)


// function getData() {
//     const response = axios.get("https://api.gameofthronesquotes.xyz/v1/random")
//     console.log(response)
//     console.log("__________")
//     console.log("this line is after axios.get()")
//     /*Using await and async forces the function to not continue 
//     until the portion that is labeled await is finished*/
// }

/*
Async/Await
- AJAX requests are asynchronous
-- The axios.get() completes before the response is received
-- If we want to use the data we get back we need to wait until
--the response has been given to us.
*/

async function getData() {
    const response = await axios.get("https://api.gameofthronesquotes.xyz/v1/random")
    console.log(response)
    console.log("__________")
    console.log("this line is after axios.get()")
    /*Using await and async forces the function to not continue
    until the portion that is labeled await is finished*/
}

async function getPoke() {


    const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
    const { next, results } = res.data;
    let count = 0;
    for (let pokemon of results) {
        console.log(pokemon.name)
        count++;
    }
    const nextPage = await axios.get(next)
    const nextRes = nextPage.data.results;
    const ul = document.querySelector("#list");
    for (let pokemon of nextRes) {
        console.log(pokemon.name)
        count++;
        const newLi = document.createElement("li");
        const poke = document.createElement("b");
        poke.innerText = pokemon.name
        newLi.append(poke)
        ul.append(newLi)
    }

    console.log(count)
}

async function getLaunches() {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
    console.log(res)
}

// getPoke()
// console.log("I happen after getPoke()>>>>")

// Having code after a async function doesn't mean it will happen
//after the completion of the async function. 

//Handling Errors with Axios 

async function getPokemon(pokemon) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url);
        console.log(res);
        console.log(res.data.name);
    }
    catch (e) {
        alert("Pokemon Not Found")
    }
}

// async function getJoke(name) {
//     try {
//         const url = `https://api.chucknorris.io/jokes/random?name=${name}`
//         const res = await axios.get(url)
//         console.log(res.data.value)
//     }
//     catch (e) {
//         alert("Site doesn't exist")
//     }
// }

// Can be shortcutted using axios.get params

async function getJoke(name) {
    try {
        const res = axios.get("https://api.chucknorris.io/jokes/random", { params: { name: name } })
        // This trail of params won't work as their are many possible parameters that
        //could be used in the url. F
        console.log(res.data.value)
    }
    catch (e) {
        alert("Site doesn't exists")
    }
}

// .post
// axios.post(url, [data], [config])

// async function getUsers() {
//     const res = await axios.get("https://reqres.in/api/users")
//     console.log(res)
// }

// async function createUser() {
//     const res = await axios.post("https://reqres.in/api/users", { username: "Tim", email: "myEmail@email" })
//     console.log(res)
// }

async function getUsers(token) {
    const res = await axios.get("https://hack-or-snooze.herokuapp.com/users", { params: { token } })
    console.log(res)
}

async function signUp(username, password, name) {
    const res = await axios.post("https://hack-or-snooze.herokuapp.com/users", { user: { name, username, password } })
    console.log(res)
}