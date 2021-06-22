import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {Detalle} from '../actions/actions'
import './Card.css'

const Card = ({name, id, img, continent}) => {

    const dispatch = useDispatch()

    return (
        <div className='row center'>
            
            <div className='card'>
            <img className='img' src={img} alt={name}/>
                <span className='card-body'>
                    <h1>{name}</h1>
                    <h4>{continent}</h4>
                </span>
                <Link to={`/home/detalles/${id}`}>   
                    <button className='buttonLink' onClick={() => {dispatch(Detalle(id))}}>
                        Details </button>
                </Link>    
            </div>
            
        </div>
    )
}

export default Card;