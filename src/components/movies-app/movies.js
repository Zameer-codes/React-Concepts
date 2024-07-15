import React, { useEffect, useState } from 'react';
import './movies.css';

const fetchMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = await fetch("https://swapi.py4e.com/api/films/", options).then((response) =>
        response.json()
    ).then((data)=> data);
    //console.log(response);
    return response;
}

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState({});

    const handleClickMovie = (movie) => {
        console.log(movie);
        setCurrentMovie(movie);
    }

    useEffect(() => {
        const GetMoviesFromApi = async () => {
            const response = await fetchMovies();
            setMovies(response.results);
        }
        GetMoviesFromApi();
    }, []);

    return (
        <div id="star_wars_app">
            <div className='movies_title_container'>
                <ul>
                    {
                        movies && movies.map((item, index) => {
                            return (
                                <li className='movie_item' key={index} onClick={() => handleClickMovie(item)}>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='details_container'>
                {
                    currentMovie && Object.keys(currentMovie).length > 0 ? (
                        <>
                            <div className="title">{currentMovie.title}</div>
                            <div className='description'></div>
                            <div className='release_date'>{currentMovie.release_date}</div>
                        </>
                    )
                        :
                        (
                            <></>
                        )
                }

            </div>
        </div>
    )
}

export default Movies;