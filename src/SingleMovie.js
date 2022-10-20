import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './Hooks/useFetch'

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  const { id } = useParams();
  const { movies, error, isLoading } = useFetch(`&i=${id}`);


  if (isLoading) {
    return <div className='loading' />
  }

  if (error.msg) {
    return <div className='page-error'>
      <h1>{error.msg}</h1>
      <Link to='/' className='btn'>Back to movie</Link>
    </div>
  }

  const { Poster: poster, Title: title, Year: year, Plot: plot } = movies;
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
