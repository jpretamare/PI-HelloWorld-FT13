import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Busq} from '../actions/actions'
import './Search.css'

const Search = () => {
  const [input, setInput]= useState({
    title: '',
  })

  const handleInput = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      title : e.target.value
    })
  }

  const dispatch = useDispatch()

  return (
        <div className='search'>
          <input placeholder='Tell me' className='country' onChange={handleInput} value={input.value}></input>
          <button className='boton_busq' onClick={() => {dispatch(Busq(input.title))}}>Search</button>
        </div>
  )
}

export default Search