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
        "?api_key=" + call_api.api_key
)
.then((response) => response.json())
.then((data) => {
    console.log("Trending Movies Data:", data)
})