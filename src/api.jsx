import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}

export const getUpcomingList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const getPlayingNowList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`)
    return movie.data.results
}