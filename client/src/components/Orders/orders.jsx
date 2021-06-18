import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Tod, AscAbc, AscPob, DescAbc, DescPob} from '../actions/actions'

const Orders = () => {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.conRed.countries)

  return (
    <div className='checks'>
        <button onClick={() => {dispatch(AscPob(countries))}}>Ascendent for population</button>
        <button onClick={() => {dispatch(DescPob(countries))}}>Descendent for population</button>
        <button onClick={() => {dispatch(AscAbc(countries))}}>Ascendent for name</button>
        <button onClick={() => {dispatch(DescAbc(countries))}}>Descendent for name</button>
        <button onClick={() => {dispatch(Tod())}}>Quit filters</button>
    </div>
  )
}

export default Orders