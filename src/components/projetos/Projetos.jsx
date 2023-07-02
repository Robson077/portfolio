
import CardProjects from '../cardProjects/CardProjects'

import smartWatch from "../../assets/smart-watch.png"
import more from "../../assets/987656.png"
import helloStars from "../../assets/hello stars.png"
import rodolfo from "../../assets/rodolfo.png"
import caixa from "../../assets/caixa.png"
import todo from "../../assets/todo.png"


import "./Projetos.css"

const Projetos = () => {
    return (
        <section>
            <h1>Projetos</h1>

            <div className="cards-projects">
                <div className="card-project-cima">
                    <CardProjects img={smartWatch} title="Smart Watch" stacks="HTML5 / #CSS3"/>
                    <CardProjects img={more} title="Api Rick and Morty" stacks="REACTjs"/>
                    <CardProjects img={helloStars} title="Hello Stars" stacks="HTML5 / #CSS3"/>
                </div>

                <div className="card-project-baixo">
                    <CardProjects img={rodolfo} title="Dev contábil" stacks="HTML5 / #CSS3 / #JAVASCRIPT"/>
                    <CardProjects img={caixa} title="Caixa Eletrônico" stacks="HTML5 / #CSS3 / #JAVASCRIPT"/>
                    <CardProjects img={todo} title="Todo-list" stacks="HTML5 / #CSS3 / #JAVASCRIPT"/>
                </div>
            </div>
        </section>
    )
}

export default Projetos