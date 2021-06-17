import React from 'react'

const ActTur = ({name, level, duration, temp}) => {
    return (
        <div className='Activ'>
            <span className='name'>{name}</span>
            <span className='level'>{level}</span>
            <span className='duration'>{duration}</span>
            <span className='temp'>{temp}</span>
        </div>
    )
}

export default ActTur;