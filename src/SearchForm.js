import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { error, query, setQuery } = useGlobalContext();

  const formSubmitHandler = (e) => {
    e.preventDefault();
  }

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  }

  return <form className='search-form' onSubmit={formSubmitHandler}>
    <h2>Search Movies</h2>
    <input type='text' className='form-input' value={query} onChange={queryChangeHandler} placeholder="Enter a movie name" />
    {error.show && <p className='error'>{error.msg}</p>}
  </form>
}

export default SearchForm
