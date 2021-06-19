import {INGRESO, DETALLE, PAG, BUSCADO, ALL, CONT, TURISM, TURISMALL, ASCPOB, DESCPOB, ASCABC,DESCABC, LIST} from './actionName'
import axios from 'axios'

export function Ingreso() {
    return async (dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/countries`)
        dispatch({type: INGRESO, payload: data})
    }
}

export function Pag(props) {
    return async (dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/countries?p=${props}`)
        dispatch({type: PAG, payload: data})
    }
}

export function Detalle(payload) {
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/countries/${payload}`)
        dispatch({type: DETALLE, payload: data})
    }
}

export function Busq(payload) {
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/countries?name=${payload}`)
        dispatch({type: BUSCADO, payload: data})
    }
}

export function Tod() {
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/countries?p=all`)
        dispatch({type: ALL, payload: data})
    }
}

export function TurAll(){
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/activities`)
        dispatch({type: TURISMALL, payload: data})
    }
}

export function Tur(props) {
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/activities?tur=${props}`)
        dispatch({type: TURISM, payload: data})
    }
}

export function Cont(props){
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/countries?cont=${props}`)
        dispatch({type: CONT, payload: data})
    }
}

export function AscPob(props){
    return (dispatch) => {
        const countries = props.sort((a,b) => a.pob - b.pob)
        dispatch({type: ASCPOB, payload: countries})
    }
}

export function DescPob(props){
    return (dispatch) => {
        const countries = props.sort((a,b) => b.pob - a.pob)
        dispatch({type: DESCPOB, payload: countries})
    }
}

export function AscAbc(props){
    return (dispatch) => {
        const countries = props.sort((a,b) => {
            const primero = a.name.toUpperCase()
            const ultimo = b.name.toUpperCase()
            if (primero < ultimo){
                return -1
            }
            if (primero > ultimo){
                return 1
            }
            else {return 0}
        })
        dispatch({type:ASCABC, payload: countries})
    }
}
export function DescAbc(props){
    return async(dispatch) => {
        const countries = props.sort((a,b) => {
            const primero = a.name.toUpperCase()
            const ultimo = b.name.toUpperCase()
            if (primero > ultimo){
                return -1
            }
            if (primero < ultimo){
                return 1
            }
            else {return 0}
        })
        dispatch({type:DESCABC, payload: countries})
    }
}

export function AgrAct(props, paises) {
    return (dispatch) => {
    let body = {...props, paises}
    body = JSON.stringify(body)
    axios({method: 'post', url: "http://localhost:3001/activities/new",headers: {'Content-Type': 'application/json'} , data: body}) 
    .then(window.location.href = "http://localhost:3000/home")
    .then(dispatch({type:LIST}))
}}