import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
        <h1>Conoce nuestro contenido Educativo</h1>
        <p>Nuestros planes de estudios de vanguardia están diseñados para empoderar a los estudiantes
            con el conocimiento, habilidades y experiencias necesarias para sobresalir
            en el campo dinámico de la educación.
        </p>
        <button className="btn">Conocer más <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero
