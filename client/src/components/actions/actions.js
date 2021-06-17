import {INGRESO, DETALLE, PAG, BUSCADO, ALL, CONT, TURISM, TURISMALL, ASCPOB, DESCPOB, ASCABC,DESCABC} from './actionName'
import axios from 'axios'

export function Ingreso() {
    return async (dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries`)
        dispatch({type: INGRESO, payload: data})
    }
}

export function Pag(props) {
    return async (dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries?p=${props}`)
        dispatch({type: PAG, payload: data})
    }
}

export function Detalle(payload) {
    return async(dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries/${payload}`)
        dispatch({type: DETALLE, payload: data})
    }
}

export function Busq(payload) {
    return async(dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries?name=${payload}`)
        dispatch({type: BUSCADO, payload: data})
    }
}

export function Tod() {
    return async(dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries?p=all`)
        dispatch({type: ALL, payload: data})
    }
}

export function TurAll(){
    return async(dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries/activities`)
        dispatch({type: TURISMALL, payload: data})
    }
}

export function Tur(props) {
    return async(dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries/activities?tur=${props}`)
        dispatch({type: TURISM, payload: data})
    }
}

export function Cont(props){
    return async(dispatch) => {
        let {data} = await axios.get(`http://localhost:3001/countries?cont=${props}`)
        dispatch({type: CONT, payload: data})
    }
}

export function AscPob(props){
    return (dispatch) => {
        let asd = props.sort((a,b) => a.pob - b.pob)
        dispatch({type: ASCPOB, payload: asd})
    }
}

export function DescPob(props){
    return (dispatch) => {
        let countries = props.sort((a,b) => b.pob - a.pob)
        dispatch({type: DESCPOB, payload: countries})
    }
}

export function AscAbc(props){
    return (dispatch) => {
        let countries = props.sort((a,b) => a.name - b.name)
        dispatch({type:ASCABC, payload: countries})
    }
}
export function DescAbc(props){
    return async(dispatch) => {
        let countries = props.sort((a,b) => b.name - a.name)
        dispatch({type:DESCABC, payload: countries})
    }
}
