// ==========> exercice 1

const giphyURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function fetchGifs() {
    fetch(giphyURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Giphy API Data:", data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

fetchGifs();

// ==========>exercice 2

const giphySunURL = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function fetchSunGifs() {
    fetch(giphySunURL)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => console.log("Sun GIFs Data:", data))
        .catch(error => console.error("Error fetching data:", error));
}

fetchSunGifs();


// ==========> exercice 3

async function fetchStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log(data.result);
    } catch (error) {
        console.error("Error fetching starship:", error);
    }
}

fetchStarship();

// ============> exercice 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// calling
// resolved
