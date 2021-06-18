import React from 'react'
import {useSelector} from 'react-redux'
import Activ from '../actTur/actTur'
import { Link } from 'react-router-dom';


const Detalle = () => {
    const detalle = useSelector(state => state.detRed.detalle)

    return (
        <div className='backgroundDet'>
            <Link to='/home'><button>Home</button></Link>
            <span className='id'>Code: {detalle.id}</span>
            <h1 className='name'>Name: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name}/>
            <div className='info'>
                <span className='continent'>Continent: {detalle.continent}</span>
                <br/>
                <span className='capital'>Capital: {detalle.capital}</span>
                <br/>
                <span className='area'>Area: {detalle.area} Km2</span>
                <br/>
                <span className='pob'>Population: {detalle.pob}</span>
                <br/>
                <span className='subreg'>Subregion: {detalle.subReg}</span>
            </div>
            <div className='activities'>
            {
                detalle.turisms &&
                detalle.turisms.forEach(x => (
                    <Activ name={x.name} level={x.level} duration={x.duration} temp={x.temp} id={x.id}/>
                ))
            }
            </div>
        </div>
    )
}

export default Detalle;