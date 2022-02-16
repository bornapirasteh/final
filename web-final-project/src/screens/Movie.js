import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

const Movie = () => {
  const location = useLocation()
  return (
    <>
      <Header/>
      <div className='movie'>
        <img src={location.state.img_url} className='movie-img' alt={location.state.name}/>
        <div className='movie-desc-container'>
          <h3 className='movie-title'>Title: {location.state.title || 'hello world'}</h3>
          <p className='movie-released-year'>Released year: {location.state.year || '2017'}</p>
          <p className='movie-desc'>Description: <br/>{location.state.desc || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae accusantium nesciunt quas adipisci quis nihil labore cupiditate iste commodi. Officiis, similique, voluptatum deleniti aspernatur laboriosam quas nobis explicabo, rem unde eum ullam dicta sequi eius quidem numquam sint. Itaque, recusandae accusamus? Qui ipsum alias dicta neque ducimus fugiat officia possimus?'}</p>
        </div>
      </div>
    </>
  )
}

export default Movie