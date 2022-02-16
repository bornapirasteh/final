import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SingleMovie from '../components/SingleMovie'
import axios from 'axios'

const Home = () => {
  const [movies, setMovies] = useState()

  useEffect(async () => {
    if(!movies) {
      const response = await axios.get('http://localhost:8000/movies')
      console.log(response)
      setMovies(response.data)
    }
  }, [movies, setMovies])
  return (
    <div className='container'>
      <Header/>
      {movies && movies.map((movie, index) => <SingleMovie key={index} movie={movie}/>)}
    </div>
  )
}

export default Home