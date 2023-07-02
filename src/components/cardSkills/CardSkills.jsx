import React from 'react'


import "./CardSkills.css"

const CardSkills = ({ icon, name, style}) => {
    return (
        <div className='card-skills'>
            <span className='icon' >{icon}</span>
            <p style={style}>{name}</p>
        </div>
    )
}

export default CardSkills