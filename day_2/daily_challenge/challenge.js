// ===========> challenge 1

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Random GIF Finder</title>
// </head>
// <body>
//     <h1>Random GIF Finder</h1>

//     <form id="search-form">
//         <input type="text" id="search-input" placeholder="Search for a random GIF..." required />
//         <button type="submit">Get Random GIF</button>
//         <button type="button" id="delete-all-btn">Delete All</button>
//     </form>

//     <div id="gif-grid"></div>

//     <script src="challenge.js"></script>
// </body>
// </html>

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const grid = document.getElementById('gif-grid');
const deleteAllBtn = document.getElementById('delete-all-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const tag = input.value.trim();

    try {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(tag)}&rating=g`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const gifUrl = data.data.images.fixed_width.url;

        const container = document.createElement('div');

        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = tag;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            container.remove();
        });

        container.appendChild(img);
        container.appendChild(deleteBtn);
        grid.appendChild(container);

    } catch (err) {
        console.log('ooooooops', err);
    }
});

deleteAllBtn.addEventListener('click', () => {
    grid.innerHTML = '';
});



// ============> challenge 2


// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Sunrise Finder</title>
// </head>

// <body>
//     <h1>Sunrise Finder</h1>

//     <h2>City 1</h2>
//     <label for="lat1">Latitude:</label>
//     <input type="number" id="lat1" step="any" placeholder="e.g. 48.864716" />
//     <br /><br />
//     <label for="lng1">Longitude:</label>
//     <input type="number" id="lng1" step="any" placeholder="e.g. 2.349014" />

//     <h2>City 2</h2>
//     <label for="lat2">Latitude:</label>
//     <input type="number" id="lat2" step="any" placeholder="e.g. 40.730610" />
//     <br /><br />
//     <label for="lng2">Longitude:</label>
//     <input type="number" id="lng2" step="any" placeholder="e.g. -73.935242" />

//     <br /><br />
//     <button onclick="fetchSunrises()">Find Sunrise Times</button>

//     <div id="error"></div>

//     <div id="results" style="display:none;">
//         <h2>Results</h2>
//         <p>City 1 sunrise (UTC): <strong id="time1"></strong></p>
//         <p>City 2 sunrise (UTC): <strong id="time2"></strong></p>
//     </div>

//     <script src="challenge.js"></script>
// </body>

// </html>


function getSunrise(lat, lng) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;

    return fetch(url)
        .then(function (response) {
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            return response.json();
        })
        .then(function (data) {
            if (data.status !== "OK") throw new Error("API returned non-OK status");
            return data.results.sunrise;
        });
}

function formatTime(isoString) {
    const date = new Date(isoString);
    return date.toUTCString().slice(17, 25);
}

async function fetchSunrises() {
    const lat1 = document.getElementById("lat1").value;
    const lng1 = document.getElementById("lng1").value;
    const lat2 = document.getElementById("lat2").value;
    const lng2 = document.getElementById("lng2").value;

    const errorEl = document.getElementById("error");
    const resultsEl = document.getElementById("results");

    errorEl.textContent = "";
    resultsEl.style.display = "none";

    if (!lat1 || !lng1 || !lat2 || !lng2) {
        errorEl.textContent = "Please fill in all four coordinate fields.";
        return;
    }

    try {
        const [sunrise1, sunrise2] = await Promise.all([
            getSunrise(lat1, lng1),
            getSunrise(lat2, lng2),
        ]);

        document.getElementById("time1").textContent = formatTime(sunrise1);
        document.getElementById("time2").textContent = formatTime(sunrise2);
        resultsEl.style.display = "block";

    } catch (error) {
        errorEl.textContent = "Error: " + error.message;
    }
}
