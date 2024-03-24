import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
                setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>NOSOTROS</h3>
            <h2>Algo de Nosotros </h2>
            <p>Lorem Ipsum es simplemente el texto de relleno de 
                las imprentas y archivos de texto. Lorem Ipsum ha 
                sido el texto de relleno estándar de las industrias 
                desde el año 1500, cuando un impresor (N. del T. 
                persona que se dedica a la imprenta) desconocido 
                usó una galería de textos y los mezcló de tal manera
                 que logró hacer un libro de textos especimen. 
                 No sólo sobrevivió 500 años, sino que tambien ingresó 
                 como texto de relleno en documentos electrónicos, 
                 quedando esencialmente igual al original. 
                 Fue popularizado en los 60s con la creación de las 
                 hojas "Letraset", las cuales contenian pasajes de 
                 Lorem Ipsum, y más recientemente con software de 
                 autoedición, como por ejemplo Aldus PageMaker, 
                 el cual incluye versiones de Lorem Ipsum.</p>
        </div>
      
    </div>
  )
}

export default About
