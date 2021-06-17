import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Tod} from '../actions/actions';
import {useDispatch} from 'react-redux'

const Turismo = () => {
    const [input, setInput] = useState({
	    name: "",
	    level: "",
	    duration: "",
	    temp: "",
 	})
    
    const [paises, setPaises] = useState({
        paises: []
    })

    
    return (
        <div className='form'>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Turismo;