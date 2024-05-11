import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Ingles from './Components/Ingles/Ingles'
import Ti from './Components/Ti/Ti'
import Matematicas from './Components/Matematicas/Matematicas'
import CookieConsent from 'react-cookie-consent'

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
        
        <CookieConsent
          buttonText="Acepto"
          buttonStyle={{ color: "#fff", fontSize: "13px", background:"#4d5ef3", borderRadius:"20px", padding:"15px" }}
          enableDeclineButton
          onDecline={() => {
          alert("Gracias, EDUCARE no se registrará sus preferencias de navegación.");
          }}
          declineButtonText="Rechazar"
          declineButtonStyle={{color: "#fff", fontSize: "13px", background:"red", borderRadius:"20px", padding:"15px"}}
        >
        
        <h3>Preferencias de cookies</h3>
        Utilizamos cookies para almacenar o recuperar información sobre el navegador. 
        Esta información puede estar relacionada con el usuario, sus preferencias o su 
        dispositivo, y se usa principalmente para que el sitio funcione según lo esperado. 
        Dado que respetamos el derecho a la privacidad, el usuario puede decidir no 
        permitir ciertos tipos de cookies. Al hacer clic en los encabezados de cada 
        categoría se puede obtener más información y cambiar la configuración. 
        No obstante, bloquear algunos tipos de cookies puede afectar la experiencia 
        en el sitio y los servicios que podemos ofrecer.
        </CookieConsent>
        
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
    
  )
}

export default App
