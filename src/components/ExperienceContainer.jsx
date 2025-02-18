import React from 'react'

import ufcg from '../img/nazaria.jpeg'
import alura from '../img/drv.svg'

import '../styles/components/academycontainer.sass'

const formacoes = [
    {
        id: 'Nazária',
        periodo: '05/2024 - Atual',
        curso: 'Analista de Suporte Pleno',
        descricao: 'Prestando suporte técnico nos sistemas utilizados. Também desenvolvendo aplicações sob demanda. ',
        logo: ufcg
    },
    {
        id: 'DRV Tecnologia',
        periodo: '01/2024 - 05/2025',
        curso: 'Dev Full-Stack',
        descricao:
            'Desenvolvimento de chatbots e aplicações web. Utilizando tecnologias como React, Node.js e MongoDB.',
        logo: alura
    },
]

const ExperienceContainer = () => {
    return (
        <section className="academy-container">
            <h2>Experiências</h2>
            <div className="formacoes">
                {formacoes.map((curso, index) => (
                    <div key={index} className="curso">
                        <h3 className="title">{curso.curso}</h3>

                        <div className="logo-info">
                            <img src={curso.logo} alt="" className="logo" />

                            <div className="info">
                                <h3 id="descricao">Empresa: {curso.id}</h3>
                                <h3 id="descricao">Período: {curso.periodo}</h3>
                                <h3 id="descricao">{curso.descricao}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ExperienceContainer;
