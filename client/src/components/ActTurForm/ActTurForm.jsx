import React,{useState, useEffect} from 'react'
import {AscAbc, Tod, AgrAct} from '../actions/actions';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Turismo = () => {
    const [input, setInput] = useState({
	    name: "",
	    level: "",
	    duration: "",
	    temp: "",
 	})
    const [paises, setPaises] = useState([])

    const countries = useSelector(state => state.conRed.countries)
    const dispatch = useDispatch()

    useEffect(() => {
        if (countries.length < 200){
            dispatch(Tod())
            dispatch(AscAbc(countries))
        }
    }, [paises])

    function handle(e) {
        setInput({
              ...input,
              [e.target.name]: e.target.value
        })
    }

    function handlePaises(e) {
        setPaises(paises.concat(e.target.value))
    }
    
    return (
        <div className='form'>
            <Link to='/home'><button>Home</button></Link>
            <form onSubmit={() => {dispatch(AgrAct(input, paises))}}>
            <div>
                <input type='text' placeholder='Name for activity' className='name' name='name' onChange={handle} value={input.name} required/>
            </div>
            <div>
                <input type='number 'placeholder='Duration in minuts' className='duration' name='duration' onChange={handle} value={input.duration} required/>
            </div>
            <div>
                <select className="selectLevel" name="level" value={input.level} onChange={handle} required>
                    <option value="">Level</option>
                    <option value="1">Very Easy</option>
                    <option value="2">Easy</option>
                    <option value="3">Medium</option>
                    <option value="4">Hard</option>
                    <option value="5">Very Hard</option>
                </select>
            </div>
            <div>
                <select className="selectTemp" name="temp" value={input.temp} onChange={handle} required>
                    <option value="">Season</option>
                    <option value="Verano">Summer</option>
                    <option value="Otoño">Fall</option>
                    <option value="Invierno">Winter</option>
                    <option value="Primavera">Spring</option>
                </select>
            </div>
            <div>
                <select className="selectPais" name="paises" value={paises.paises} onChange={handlePaises}>
                    <option value=''>Countries</option>
                    {countries && countries.map(c => (
                    <option value={c.id} name="c.name">{c.name}</option>
                    ))}
                </select>
                <div>
                    <span>Id of select countries</span>
                    <br/>
                        {
                        paises.length !== 0 ?
                        paises.map(c => (
                        <span>{c}
                        <br/>
                        </span>
                        )) : ''
                        }
                </div>
            </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Turismo;