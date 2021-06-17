import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import './Landing.css'
import {Tod} from '../actions/actions'

const Landing = () => {
    const dispatch = useDispatch()

    return (
        <div className='background'>
            <Link to='/home'> 
            <button className='welcome' onClick={() => {dispatch(Tod())}}>
            </button>
            </Link>
        </div>
    )
}

export default Landing;