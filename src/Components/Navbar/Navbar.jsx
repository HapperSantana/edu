import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import Modal from 'react-responsive-modal';
import user_icon from '../../assets/icons/person.png';
import email_icon from '../../assets/icons/email.png';
import password_icon from '../../assets/icons/password.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

const [login, setOpenLogin] = React.useState(false);
const [signin, setOpenSignin] = React.useState(false);

const[sticky, setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
},[])


const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = ()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Inicio</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Programas</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>Nosotros</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimoniales</Link></li>
            <li><Link to='contact' className='btn' smooth={true} offset={-260} duration={500}>Contacto</Link></li>
            <li>
              <FontAwesomeIcon className='login-icon' onClick={() => setOpenLogin(true)} icon={faUser}></FontAwesomeIcon>      
            </li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        <>

        <Modal open={signin} onClose={() => setOpenSignin(false)} center>
        <div className="contenedor">
          <div className="header">
            <div className="text">Registrarme</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Nombre'/>
            </div>
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Contraseña'/>
            </div>
          </div>
          <div className="forgot-password">Ya tengo una cuenta, deseo  <span onClick={() => setOpenSignin(false)}>iniciar sesión</span></div>
          <div className="submit-container">
            <div className="submit" onClick={() => setOpenSignin(false)}>Registrar</div>
          </div>
        </div>
          
          
        </Modal>
        <Modal open={login} onClose={() => setOpenLogin(false)} center>
        <div className="contenedor">
          <div className="header">
            <div className="text">Iniciar Sesión</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Contraseña'/>
            </div>
          </div>
          <div className="forgot-password">Olvidé mi contrasena <span>haz click aquí</span></div>
          
          <div 
          className="submit-container">
            <div className="submit" onClick={() => setOpenSignin(true)}>Registrarme</div>
            <div className="submit" onClick={() => setOpenLogin(false)}>Ingresar</div>
          </div>
        </div>
          
        </Modal>
        </>  
    </nav>

        

  )
}

export default Navbar
