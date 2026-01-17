import { call_api } from './config.js'

const HomeAPIRoutes = {
    "Trending Movies": { url: "/trending/movie/week" },
    "Popular Movies": { url: "/movie/popular" },
    "Top Rated Movies": { url: "/movie/top_rated" },
    "Now Playing at Theatres": { url: "/movie/now_playing" },
    "Upcoming Movies": { url: "/movie/upcoming" },
}

fetch(
    "https://api.themoviedb.org/3" + HomeAPIRoutes["Trending Movies"].url +
        "?api_key=" + call_api
)
.then((res) => res.json())
.then((data) => {
    console.log("Trending Movies Data:", data)
    const main = data.results[new Date().getMilliseconds() % data.results.length];
    document.querySelector("#hero-image").src = `https://image.tmdb.org/t/p/w500${main.poster_path}`
    document.querySelector("#hero-preview-image").src = `https://image.tmdb.org/t/p/w300${main.poster_path}`
    document.querySelector("#hero-title").innerText = main.title || main.name
    document.querySelector("#hero-description").innerText = main.overview;
    document.querySelector("#watch-now-btn").href = `./watch.html?id=${main.id}`
    document.querySelector("#view-info-btn").href = `./info.html?id=${main.id}`
})