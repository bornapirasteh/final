import React from 'react'
import Header from '../components/Header'
import MagnifyLogo from '../img/magnifying-glass-solid.svg'

const Search = () => {
  return (
    <div className='search-screen-container'>
      <Header/>
      <div className='search-contianer'>
        <img src={MagnifyLogo} alt="magnify icon" className='search-logo'/>
        <input type='text' className='search-input'/>
      </div>
    </div>
  )
}

export default Search