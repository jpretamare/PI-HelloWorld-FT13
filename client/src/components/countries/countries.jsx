import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../Card/Card'
import {Tod, AscAbc, DescAbc,AscPob, DescPob} from '../actions/actions'

const Countries = () => {
    const [numPag, setNumPag] = useState(1)
    const countries = useSelector(state => state.conRed.countries)
    const dispatch = useDispatch()

    let ren
    if (numPag*10 > countries.length){
        ren = countries.slice(countries.length-10, countries.length)
    } else {
        ren = countries.slice((numPag*10)-10, numPag*10)
    }

    useEffect(() => {
        if (ren.length === 0) {
            dispatch(Tod())
        }
    }, [dispatch])

    return (
        <div>
            <div className='checks'>
                <button onClick={() => {dispatch(AscPob(countries))}}>Ascendent for population</button>
                <button onClick={() => {dispatch(DescPob(countries))}}>Descendent for population</button>
                <button onClick={() => {dispatch(AscAbc(countries))}}>Ascendent for name</button>
                <button onClick={() => {dispatch(DescAbc(countries))}}>Descendent for name</button>
                <button onClick={() => {dispatch(Tod())}}>Quit filters</button>
            </div>
            <div className='bottons'>
                <button className='ant' onClick={()=>{numPag-1 === 0 ? setNumPag(1) : setNumPag(numPag-1)}}>Anterior</button>
                <button>{numPag}</button>
                <button className='sig' onClick={()=>{(numPag+1)*10 > countries.length ? setNumPag(numPag) : setNumPag(numPag+1)}}>Siguiente</button>
            </div>
            <div className='todos'>
                {
                ren &&
                ren.map(c => (
                <Card name={c.name} id={c.id}  img={c.img} continent={c.continent} />
                ))
                }
            </div>
            <div className='bottons'>
                <button className='ant' onClick={()=>{numPag-1 === 0 ? setNumPag(1) : setNumPag(numPag-1)}}>Anterior</button>
                <button>{numPag}</button>
                <button className='sig' onClick={()=>{(numPag+1)*10 > countries.length ? setNumPag(numPag) : setNumPag(numPag+1)}}>Siguiente</button>
            </div>
        </div>
    )
}

export default Countries;