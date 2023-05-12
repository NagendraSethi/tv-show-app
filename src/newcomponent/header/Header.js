import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <Link to="/" style={{textDecoration:"none"}}><h1 className='heading_style'>All Shows</h1></Link>
    </div>
  )
}

export default Header;