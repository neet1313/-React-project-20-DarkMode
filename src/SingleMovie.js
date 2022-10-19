import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT, useGlobalContext } from './context'


const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [movie, setmovie] = useState([]);

  const { id } = useParams();

  const fetchmovie = async (url) => {
    setIsLoading(() => true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        setmovie(() => data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }

      setIsLoading(() => false);

    } catch (error) {
      console.log(error);
    }

  }


  useEffect(() => {
    fetchmovie(`${API_ENDPOINT}&i=${id}`)
  }, [id]);



  if (isLoading) {
    return <div className='loading' />
  }

  if (error.msg) {
    return <div className='page-error'>
      <h1>{error.msg}</h1>
      <Link to='/' className='btn'>Back to movie</Link>
    </div>
  }

  const { Poster: poster, Title: title, Year: year, Plot: plot } = movie;
  return <section className='single-movie'>
    <img src={poster !== 'N/A' ? poster : url} alt={title} />
    <div className='single-movie-info'>
      <h2>{title}</h2>
      <p>{plot}</p>
      <h4>{year}</h4>
      <Link to='/' className='btn'>back to movies</Link>
    </div>
  </section>
}

export default SingleMovie
