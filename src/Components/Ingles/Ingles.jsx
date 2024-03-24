import React from 'react'
import './Ingles.css'
import white_arrow from '../../assets/white-arrow.png'
import ingles_1 from '../../assets/ingles1.png'
import ingles_2 from '../../assets/ingles2.png'
import ingles_3 from '../../assets/ingles3.png'
import ingles_4 from '../../assets/ingles4.png'


const Ingles = () => {
  return (
    <div className='contenido-ingles'>
        <div className="ingles">
            <img src={ingles_1} alt="" />
            <img src={ingles_2} alt="" />
            <img src={ingles_3} alt="" />
            <img src={ingles_4} alt="" />


        </div>
        <button className='btn dark-btn'>Mostrar mas contenido <img src={white_arrow} alt="" /></button>

      
    </div>
  )
}

export default Ingles
