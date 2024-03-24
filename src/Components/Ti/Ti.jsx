import React from 'react'
import './Ti.css'
import white_arrow from '../../assets/white-arrow.png'
import ti_1 from '../../assets/curso-css.jpg'
import ti_2 from '../../assets/curso-html.jpg'
import ti_3 from '../../assets/curso-js.jpg'
import ti_4 from '../../assets/curso-reactjs.jpg'


const Ti = () => {
  return (
    <div className='curso-ti'>
        <div className="ti">
            <img src={ti_1} alt="" />
            <img src={ti_3} alt="" />
            <img src={ti_2} alt="" />
            <img src={ti_4} alt="" />

        </div>
        <button className='btn dark-btn'>Mostrar mas contenido <img src={white_arrow} alt="" /></button>
      
    </div>
  )
}

export default Ti
