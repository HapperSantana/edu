import React from 'react'
import './Matematicas.css'
import white_arrow from '../../assets/white-arrow.png'
import mate_1 from '../../assets/curso-mate.png'
import mate_2 from '../../assets/curso-matebach.png'
import mate_3 from '../../assets/curso-matebasica.jpg'
import mate_4 from '../../assets/curso-mateelem.png'


const Matematicas = () => {
  return (
    <div className='curso-mate'>
        <div className="matematicas">
            <img src={mate_1} alt="" />
            <img src={mate_2} alt="" />
            <img src={mate_3} alt="" />
            <img src={mate_4} alt="" />

        </div>
      <button className='btn dark-btn'>Mostrar mas contenido <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Matematicas
