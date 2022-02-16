import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MovieLogo from '../img/movie-logo.svg'
import TMPLogo from '../img/tmp-logo.webp'

const SingleMovie = ({movie}) => {
  const navigate = useNavigate()
  const navigation = (e, prop) => {
    e.preventDefault()
    navigate('/movie', {state: prop})
  }
  return (
    <div className='single-movie'>
      <div className='single-movie-btn-image-container'>
        <div className='single-movie-image-container'>
          <img src={movie.img_url || TMPLogo} alt={movie.name} className='single-movie-image'/>
        </div>
        <div className='single-movie-btn'>
            <Link to="/movie" onClick={(e) => navigation(e, movie)}>
              <img src={MovieLogo} className='single-movie-btn-image'/>
              <p>Open movie</p>
            </Link>
        </div>
      </div>
      <div className='single-movie-desc-container'>
        <h3 className='single-movie-title'>Name: {movie.name}</h3>
        <p className='single-movie-year'>Year of Publition: {movie.year}</p>
        <p className='single-movie-desc'>{movie.description}</p>
      </div>
    </div>
  )
}

export default SingleMovie