import React from 'react'
import {useSelector} from 'react-redux'
import ActTur from '../actTur/actTur'
import './Detalle.css'


const Detalle = () => {
    const detalle = useSelector(state => state.detRed.detalle)

    return (
        <div className='backgroundDet'>
            <div className='car'>
            <span className='id'>Code: {detalle.id}</span>
            <h1 className='name'>Name: {detalle.name}</h1>
            <img className='img' src={detalle.img} alt={detalle.name}/>
            </div>
            <div className='car'>
                <div className='car-body'>
                <span className='inf'>Continent: {detalle.continent}</span>
                <br/>
                <span className='inf'>Capital: {detalle.capital}</span>
                <br/>
                <span className='inf'>Area: {detalle.area} Km2</span>
                <br/>
                <span className='inf'>Population: {detalle.pob}</span>
                <br/>
                <span className='inf'>Subregion: {detalle.subReg}</span>
                </div>
            </div>
            <div className='activities'>
            {
                detalle.Turisms && 
                detalle.Turisms.map(x => (
                    <ActTur name={x.name} level={x.level} duration={x.duration} temp={x.temp}/>
                ))
            }
            </div>
        </div>
    )
}

export default Detalle;