import React from 'react'

import "./CardProjects.css"

const CardProjects = ({ img, title, stacks }) => {
    return (
        <div className="card-projects">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p className='stacks'>#{stacks}</p>
        </div>
    )
}

export default CardProjects