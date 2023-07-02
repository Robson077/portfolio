import "./Sobre.css"

import minhaFoto from "../../assets/minhaFoto.jpg"

const Sobre = () => {
    return (
        <section>
            <h1>Robson Santana</h1>

            <div className="section-div">
                <div className="section-photo">
                    <img src={minhaFoto} alt="minha foto" />
                </div>

                <div className="section-description">
                    <p className="p-sobre">Sou um programador front-end apaixonado e dedicado, com mais de 1 ano de estudo em desenvolvimento web. Com uma forte compreensão de HTML, CSS, SASS, JavaScript e ReactJs, sou capaz de criar interfaces do usuário atraentes e intuitivas que ajudam a melhorar a experiência do usuário.</p>
                </div>
            </div>
        </section>
    )
}

export default Sobre