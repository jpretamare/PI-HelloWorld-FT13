import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../Card/Card'
import {Tod, TurAll} from '../actions/actions'
import './countries.css'

const Countries = () => {
    const [numPag, setNumPag] = useState(1)
    const countries = useSelector(state => state.conRed.countries)
    const dispatch = useDispatch()
    let todos

    useEffect(() => {
        if (countries.length === 0) {
            dispatch(Tod());
            dispatch(TurAll())
        }
        return () => {
            dispatch(TurAll())
        }
    }, [countries])

    numPag*10 > countries.length ? todos = countries.slice(countries.length-10, countries.length): todos = countries.slice((numPag*10)-10, numPag*10)

    return (
        <div className='render'>
            <div className='bottons'>
                <button className='bt' onClick={()=>{numPag-1 === 0 ? setNumPag(1) : setNumPag(numPag-1)}}>Anterior</button>
                <button className='bt'>{numPag}</button>
                <button className='bt' onClick={()=>{(numPag+1)*10 > countries.length ? setNumPag(numPag) : setNumPag(numPag+1)}}>Siguiente</button>
            </div>
            <div className='todos'>
                {
                todos &&
                todos.map((c, index) => (
                <Card index={index} name={c.name} id={c.id}  img={c.img} continent={c.continent} />
                ))
                }
            </div>
            <div className='bottons'>
                <button className='bt' onClick={()=>{numPag-1 === 0 ? setNumPag(1) : setNumPag(numPag-1)}}>Anterior</button>
                <button className='bt'>{numPag}</button>
                <button className='bt' onClick={()=>{(numPag+1)*10 > countries.length ? setNumPag(numPag) : setNumPag(numPag+1)}}>Siguiente</button>
            </div>
        </div>
    )
}

export default Countries;
