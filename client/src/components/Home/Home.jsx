import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search/Search'
import Countries from '../countries/countries'
import Filters from '../filters/filters';

function Home() {

  return (
    <div className='Home'>
      <div className='nav'>
          <Link to='/home/crear'>
            <button className='Form'>Actividad Nueva</button>
          </Link>
      </div>
      <div>
        <div className="busq">
          <Search/>
        </div>
          <div className='filtros'>
            <Filters/>
          </div>
      </div>
      <div className='cards'>
        <Countries/>
      </div>
    </div>
  )
}

export default Home