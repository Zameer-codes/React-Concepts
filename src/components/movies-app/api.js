import axios from 'axios';

export const fetchMovies = async () => {
    const response = await axios.get("https://swapi.py4e.com/api/films/").then((response)=>
        response.data
    );
    //console.log(response);
    return response;
}