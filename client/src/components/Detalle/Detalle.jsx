import React from 'react'
// import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Activ from '../actTur/actTur'


const Detalle = () => {
   const detalle = useSelector(state => state.detRed.detalle)

    return (
        <div className='backgroundDet'>
            <span className='id'>{detalle.id}</span>
            <h1 className='name'>{detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name}/>
            <div className='info'>
                <span className='continent'>{detalle.continent}</span>
                <span className='capital'>{detalle.capital}</span>
                <span className='area'>{detalle.area}</span>
                <span className='pob'>{detalle.pob}</span>
                <span className='subreg'>{detalle.subReg}</span>
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