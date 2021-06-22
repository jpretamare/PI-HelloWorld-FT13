import React from 'react'
import './actTur.css'

const ActTur = ({name, level, duration, temp}) => {
    return (
        <div className='Activ'>
            <span className='na'>{name}</span>
            <span className='le'>{level}</span>
            <span className='du'>{duration}</span>
            <span className='te'>{temp}</span>
        </div>
    )
}

export default ActTur;