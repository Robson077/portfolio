import React from "react"

import "./Header.css"

const Header = () => {
    return(
        <header>
            <div className="header-content">
                <div className="header-title">
                    <h1>Portfólio</h1>
                </div>

                <ul className="header-nav">
                    <li>Sobre mim</li>
                    <li>Habilidades</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </header>
    )
}

export default Header