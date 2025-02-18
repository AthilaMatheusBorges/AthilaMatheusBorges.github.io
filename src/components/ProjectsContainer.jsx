import React from "react";
import meuHabito from "../img/meuhabito.png";
import quadralivre from "../img/quadralivre.png";
import nazaform from "../img/nazaform.png";
import portfolio from "../img/portfolio.png";

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiDart,
    DiSass,
    DiFirebase,
    DiGithub,
} from "react-icons/di";

import { RiFlutterFill } from "react-icons/ri";

import "../styles/components/projectscontainer.sass";
import { useState } from "react";
import Modal from "react-modal";
import { FiFigma } from "react-icons/fi";
import { SiAxios, SiVercel } from "react-icons/si";
import { CgVercel } from "react-icons/cg";

Modal.setAppElement("#root");

const projects = [
    {
        nome: "Quadra Livre",
        logo: quadralivre,
        tech: [<DiReact />, <DiSass />, <FiFigma />, <SiAxios />, <DiGithub />],
        link: "",
        deploy: "",
        descricao:
            "Plataforma de agendamento de quadras de futebol. Está sendo desenvolvida com React e Sass.",
    },
    {
        nome: "Portfólio",
        logo: portfolio,
        tech: [<DiReact />, <DiSass />, <FiFigma />, <DiGithub />],
        deploy: "https://athilamatheusborges.github.io/",
        link: "https://github.com/AthilaMatheusBorges/AthilaMatheusBorges.github.io",
        descricao: "Aplicativo de gerenciamento de hábitos feito em Flutter.",
    },
    {
        nome: "meuHábito",
        logo: meuHabito,
        tech: [<RiFlutterFill />, <DiDart />, <DiMysql />, <DiGithub />],
        deploy: "",
        link: "https://github.com/AthilaMatheusBorges/meu_habito",
        descricao: "Aplicativo de gerenciamento de hábitos feito em Flutter.",
    },
    {
        nome: "Nazária Form",
        logo: nazaform,
        tech: [
            <DiReact />,
            <DiSass />,
            <DiFirebase />,
            <CgVercel />,
            <DiGithub />,
        ],
        deploy: "https://nazaria-form.vercel.app/",
        link: "https://github.com/AthilaMatheusBorges/nazaria-form",
        descricao:
            "Formulário desenvolvido para a empresa Nazária. Feito com React e Firebase.",
    },
    // {
    //     nome: 'meuHabito',
    //     logo: meuHabito,
    //     decription: ''
    // },
    // {
    //     nome: 'meuHabito',
    //     logo: meuHabito,
    //     decription: ''
    // }
];

const ProjectsContainer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000, // Certifique-se de que o z-index é alto o suficiente
        },
        content: {
            position: "fixed",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "min-content",
            overflow: "hidden",
            img: {
                width: "60%",
                objectFit: "cover",
                objectPosition: "center",
            },
        },
    };

    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <div className="project-cards">
                {projects.map((project) => (
                    <div
                        className="project-card"
                        id="card"
                        key={project.nome}
                        onClick={() => openModal(project)}
                    >
                        <img src={project.logo} alt="" className="logo-card" />
                        <div className="desfoque"></div>
                        <div className="info-project">
                            <h3>{project.nome}</h3>
                            <div className="icons">
                                {project.tech.map((logo, index) => (
                                    <div key={index}>{logo}</div>
                                ))}
                            </div>
                        </div>
                        <h4>Clique para ver mais...</h4>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <Modal
                    className="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    style={customStyles}
                >
                    <h2>{selectedProject.nome}</h2>
                    <img src={selectedProject.logo} alt="" />
                    <div className="icons">
                        {selectedProject.tech.map((logo, index) => (
                            <div key={index}>{logo}</div>
                        ))}
                    </div>
                    <p>{selectedProject.descricao}</p>
                    {selectedProject.deploy && (
                        <a
                            href={selectedProject.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver deploy
                        </a>
                    )}
                    {selectedProject.link && (
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver no GitHub
                        </a>
                    )}
                    <button onClick={closeModal}>Fechar</button>
                </Modal>
            )}
        </section>
    );
};

export default ProjectsContainer;
