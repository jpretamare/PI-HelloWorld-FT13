import React from 'react'
import './actTur.css'

const ActTur = ({name, level, duration, temp}) => {
    return (
        <div className='r'>
            <div className='ca'>
                <div className='ca-body'>
                <h4>Actividad:</h4>
                <h4>{name}</h4>
                <h4>Dificultad: {level}</h4>
                <h4>Duracion: {duration} Min</h4>
                <h4>Temporada: {temp}</h4>
            </div>
            </div>
        </div>
    )
}

export default ActTur;