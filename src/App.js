import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
//import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Ingles from './Components/Ingles/Ingles'
import Ti from './Components/Ti/Ti'
import Matematicas from './Components/Matematicas/Matematicas'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='NUESTROS PROGRAMAS' title='Lo que Ofrecemos'/>
        <Programs/>
        <Title subTitle='INGLES' title='Nuestro contenido Interactivo '/>
        <Ingles />
        <Title subTitle='Tecnologias de la Informacion' title='Nuestro contenido Interactivo '/>
        <Ti />
        <Title subTitle='Matematicas' title='Nuestro contenido Interactivo '/>
        <Matematicas />
        <About setPlayState={setPlayState}/>
        <Title subTitle='TESTIMONIOS' title='Lo que dicen de nosotros'/>
        <Testimonials />
        <Title subTitle='CONTACTO' title='Dejanos un mensaje'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
