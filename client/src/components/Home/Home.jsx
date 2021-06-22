import React from 'react'
import Countries from '../countries/countries'
import Filters from '../filters/filters';
import Orders from '../Orders/orders'
import './Home.css'

function Home() {

  return (
    <div className='Home'>
      <div>
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