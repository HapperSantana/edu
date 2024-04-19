import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mailn_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f2435eb6-10ce-4c3f-b601-e549fa97b478");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Su mensaje se ha enviado con Exito");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Deja un mensaje <img src={msg_icon} alt="" /></h3>
            <p>Indicanos como podemos ayudarte, envia un mensaje y nos pondremos en contacto a la brevedad.</p>
            <ul>
                <li><img src={mailn_icon} alt="" />contacto@educare.com</li>
                <li><img src={phone_icon} alt="" />52 33 175 66 478</li>
                <li><img src={location_icon} alt="" />Guadajalara, Jalisco. Mexico</li>
            </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Nombre</label>
                <input type="text" name='nombre' placeholder='Ingrese su nombre' required />
                <label >Teléfono</label>
                <input type="text" name='telefono' placeholder='Ingrese su telefono' required/>
                <label >Mensaje</label>
                <textarea name="mensaje" rows="6" placeholder='Ingrese su mensaje aquí  ' required></textarea>
                <div className="check-politicas">
                  <div>
                  <input type="checkbox" name="politicas" required/>
                  </div>
                  <div>
                  <label>&nbsp;Acepto las <a href=' ' className='url-politicas'>Politicas de Privacidad</a> del Sitio</label>
                  </div>
                </div>
                
                <button type='submit' className='btn dark-btn'>Enviar <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result}</span>

        </div>
         
      
    </div>
  )
}

export default Contact
