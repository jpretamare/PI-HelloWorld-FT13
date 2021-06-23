import React from 'react'
import Search from '../Search/Search'
import './navBar.css'
import {Link} from 'react-router-dom'

export default function navBar() {
    return (
        <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/home/crear">New Activity</Link>
            </div>  
        </div>
        <Search/>
    </div>
    )
}
