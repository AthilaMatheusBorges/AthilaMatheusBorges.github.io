import React from 'react'

import Avatar from '../img/eu.png'

import '../styles/components/sidebar.sass'
import {SocialNetworks} from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Borges" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="https://drive.google.com/file/d/1H3JQF1xAPhQSJBruHgQsQAcx3ON4bz0c/view" className="btn" target='_blank' rel="noreferrer">
        Download CV
      </a>
    </aside>
  )
}

export default Sidebar
