import { useState, useEffect, useCallback } from 'react'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState({ show: false, msg: '' });

    const fetchMovie = useCallback(async (url) => {
        setIsLoading(() => true);

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === 'True') {
                setMovies(data.Search || data);
                setError({ show: false, msg: '' });

            } else {
                setError({ show: true, msg: data.Error });
            }

            setIsLoading(() => false);
        } catch (error) {
            console.log(error);
            setIsLoading(() => true);
        }
    }, []);


    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams, fetchMovie]);


    return {
        isLoading, error, movies
    }
}

export default useFetch
