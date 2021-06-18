import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {Detalle} from '../actions/actions'



const Card = ({name, id, img, continent}) => {

    const dispatch = useDispatch()

    return (
        <div className='target'>
            <div className='card'>
                <span className='name'>{name}</span>
                <span className='cont'>{continent}</span>
                <img className='img' src={img} alt={name}/>
            </div>
            <Link to={`/home/detalles/${id}`}> 
                <button className='buttonLink' onClick={() => {dispatch(Detalle(id))}}/>
            </Link>
        </div>
    )
}

export default Card;