import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube, faLinkedin, faTwitch, faWhatsapp, faSnapchat, faGithub } from '@fortawesome/free-brands-svg-icons'




const Footer = () => {
  return (
    <div className='footer'>
      <div className='sitemap'>
      <p>© 2024 Educare. Todos los derechos reservados. | <span>Mapa del Sitio</span></p>
      
        <ul>
        
          <li>Inicio</li>
          <li>Programas</li>
          <li>Nosotros</li>
          <li>Testimoniales</li>
          <li>Contacto</li>
        </ul>
        
        
      </div>
        
        <div className='fa-2x social-media-icons'>
          <ul>
            <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faSnapchat}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>
          </ul>
        </div>
        <ul>
            <li>Terminos y Condiciones</li>
            <li>Politicas de Privacidad</li>
        </ul>
      
    </div>
  )
}

export default Footer
