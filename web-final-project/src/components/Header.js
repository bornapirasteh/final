import React, { useState } from 'react'
import MagnifyLogo from '../img/magnifying-glass-solid.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState()
  return (
    <nav className='header'>
      <ul className='header-links'>
        <Link to='/'><li className='header-link'>Home</li></Link>
        <Link to='/create-movie'><li className='header-link'>Create Movie</li></Link>
      </ul>
      <div className='header-search-container'>
        <img src={MagnifyLogo} className='search-logo'/>
        <input type="text" placeholder='Search...' className='search-input' value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
    </nav>
  )
}

export default Header