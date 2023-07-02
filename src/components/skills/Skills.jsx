import React from 'react'
import CardSkills from '../cardSkills/CardSkills'
import {ImHtmlFive, ImCss3} from "react-icons/im"
import {IoLogoSass, IoLogoJavascript} from "react-icons/io"
import {FaBootstrap, FaReact} from "react-icons/fa"

import "./Skills.css"

const Skills = () => {
    return (
        <section>
            <h1>Habilidades</h1>

            <div className="cards-skills">
                <div className="cards-cima">
                    <CardSkills 
                        icon = {<ImHtmlFive color="#E96228"/>}
                        name="HTML5"
                        style={{color: "#E96228"}}
                    />

                    <CardSkills 
                        icon = {<ImCss3 color="#3595CF"/>}
                        name="CSS3"
                        style={{color: "#3595CF"}}
                    />

                    <CardSkills 
                        icon = {<IoLogoSass color="#C76494"/>}
                        name="SASS"
                        style={{color: "#C76494"}}
                    />

                </div>

                <div className="cards-baixo">
                    <CardSkills 
                        icon = {<FaBootstrap color="#5D3E88"/>}
                        name="BOOTSTRAP"
                        style={{color: "#5D3E88"}}
                    />

                    <CardSkills 
                        icon = {<IoLogoJavascript color="#EFD81D"/>}
                        name="JAVASCRIPT"
                        style={{color: "#EFD81D"}}
                    />

                    <CardSkills 
                        icon = {<FaReact color="#5ED3F3"/>}
                        name="REACTJS"
                        style={{color: "#5ED3F3"}}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills