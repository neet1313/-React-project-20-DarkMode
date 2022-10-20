import React, { useState, useContext } from 'react'
import { useFetch } from './Hooks/useFetch'

const AppContext = React.createContext();

//Context Provider
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('Batman');

  const { isLoading, error, movies } = useFetch(`&s=${query}`);

  return (<AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
    {children}
  </AppContext.Provider>)
}

//Custom Hook
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
