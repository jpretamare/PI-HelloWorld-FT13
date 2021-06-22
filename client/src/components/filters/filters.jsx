import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Tur, TurAll, Cont} from '../actions/actions'
import './filters.css'

const Filters = () => {
    const tur = useSelector(state => state.turRed.turis)
    const dispatch = useDispatch()
	
    useEffect(() => {
		dispatch(TurAll())
		return () => {
			dispatch(TurAll())
		}
    }, [])

    function filCont(e) {
		dispatch(Cont(e.target.value))
  	}

  	function filTur(e) {
  		dispatch(Tur(e.target.value))
  	}

    return (
        <div className='filters'>
            <select className="filCont" name="continent" onChange={filCont}>
			    <option value="">Filter by Continent</option>
			    <option value="Europe">Europe</option>
			    <option value="America">America</option>
			    <option value="Asia">Asia</option>
			    <option value="Oceania">Oceania</option>
			    <option value="Africa">Africa</option>
		    </select>
            <select className="filTur" name="turism" onChange={filTur}>
	  			<option value="">Filter by Activity Turistic</option>
	  			{tur && tur.map(s => (
	  			<option value={s.name}>{s.name}</option>
	  			))}
  			</select>
        </div>
    )
}

export default Filters;