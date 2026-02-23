// =========> exercice 1

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Giphy API Example</title>
// </head>

// <body>
//     <h1>Random GIF from Giphy</h1>
//     <div id="gif-container"></div>

//     <script src="exercice_xp_gold.js">
        
//     </script>
// </body>

// </html>

const API_KEY = 'bNf7rqKvchAobPgGgDxwYArQu5CHHYvI';
const SEARCH_TERM = 'cheeseburgers';

async function fetchGif() {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(SEARCH_TERM)}&limit=25&rating=g&lang=en`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const gifs = data.data;
        if (gifs.length === 0) {
            console.log('No GIFs found for this search term.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * gifs.length);
        const gifUrl = gifs[randomIndex].images.fixed_height.url;

        const container = document.getElementById('gif-container');
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = SEARCH_TERM;
        container.appendChild(img);

    } catch (error) {
        console.error('Error fetching GIF:', error);
    }
}

fetchGif();


// ==========> exercice 2

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

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()

// ==SEQUENTIAL START==
// starting slow promise
// (slow promise waits 2 seconds)
// slow promise is done
// slow
// starting fast promise
// (fast promise waits 1 second)
// fast promise is done
// fast



// ============> exercice 3

let resolveAfter2Seconds1 = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second2 = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)


// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// (fast promise waits 1 second)
// fast promise is done
// (slow promise waits 2 seconds)
// slow promise is done
// slow
// fast

// ===========> exercice 4

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(
      urls.map(async url => {
        const resp = await fetch(url);
        return resp.json();
      })
    );
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch(err) {
    console.log('ooooooops', err);
  }
}

getData();
