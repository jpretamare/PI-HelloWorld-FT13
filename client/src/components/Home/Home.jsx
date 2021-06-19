import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search/Search'
import Countries from '../countries/countries'
import Filters from '../filters/filters';
import Orders from '../Orders/orders'
import './Home.css'

function Home() {

  return (
    <div className='Home'>
      <div className='nav'>
          <Link to='/home/crear'>
            <button className='Form'>New Activity</button>
          </Link>
      </div>
      <div>
        <div className="busq">
          <Search/>
        </div>
          <div className='filtros'>
            <Filters/>
          </div>
          <div>
            <Orders/>
          </div>
      </div>
      <div className='cards'>
        <Countries/>
      </div>
    </div>
  )
}

export default Home