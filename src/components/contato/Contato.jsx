import React from 'react'

import "./Contato.css"

import {BsWhatsapp, BsLinkedin} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

const Contato = () => {
    return (
        <section>
            <h1>Contatos</h1>
            <form >
                <BsWhatsapp color="#26DE5F"/>
                <BsLinkedin color="#0A63BC"/>
                <MdEmail color="#D64B3F"/>
            </form>
        </section>
    )
}

export default Contato