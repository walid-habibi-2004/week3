// ============> exercice 1
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Giphy Search</title>
// </head>
// <body>
//     <h1>GIF Finder</h1>
//     <form id="search-form">
//         <input type="text" id="search-input" placeholder="Search for a GIF..." required />
//         <button type="submit">Search</button>
//         <button type="button" id="delete-btn">Delete</button>
//     </form>
//     <div id="gif-grid"></div>
//     <script src="exercice_xp_ninja.js"></script>
// </body>
// </html>


const API_KEY = 'bNf7rqKvchAobPgGgDxwYArQu5CHHYvI';
const LIMIT = 20;

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const grid = document.getElementById('gif-grid');
const deleteBtn = document.getElementById('delete-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    grid.innerHTML = '';

    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=${LIMIT}&rating=g&lang=en`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const gifs = data.data;

        gifs.forEach(gif => {
            const gifUrl = gif.images.fixed_width.url;
            const img = document.createElement('img');
            img.src = gifUrl;
            img.alt = gif.title;
            grid.appendChild(img);
        });

    } catch (err) {
        console.log('ooooooops', err);
    }
});

deleteBtn.addEventListener('click', () => {
    grid.innerHTML = '';
});

// ============> exercice 2


let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)

// ==CONCURRENT START with Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done
// slow
// fast

// ============> exercice 3

let resolveAfter2Secondss = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Seconds = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Secondss()))(),
        (async () => console.log(await resolveAfter1Seconds()))()
    ]);
}

setTimeout(parallel, 5000)


// ==PARALLEL with await Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow


// ============> exercice 4

let resolveAfter2Secondssss = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Secondsss = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Secondssss().then((message) => console.log(message));
    resolveAfter1Secondsss().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)


// ==PARALLEL with Promise.then==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow
