import './Upcoming.css';
import React, { useEffect, useState } from 'react';
import { getMovieList, searchMovie, getUpcomingList } from "../api";
import NavBar from './NavBar';

const Upcoming = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect( () =>  {
    getUpcomingList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img 
              className="Movie-image" 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            />
            <div className="Movie-date">Release: {movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
      );
    })
  }

  const search = async (q) => {
    const query = await searchMovie(q)
    setPopularMovies(query.results)
  }

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <h1 className='font-bold text-6xl'>Upcoming Releases</h1>
        <input 
          placeholder="Search Film..." 
          className="Movie-search text-neutral-950" 
          onChange={({ target }) => search(target.value)}
        />


        <div className="Movie-container">
            <PopularMovieList />
        </div>
      </div>
    </div>
  );
}

export default Upcoming;