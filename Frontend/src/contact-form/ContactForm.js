import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        message: '',
        image: null
    });

    const onFormFill = (event) => {
        const { name, value, type } = event.target;

        if (type === 'file') {
            setFormData({ ...formData, [name]: event.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        setFormData({...formData, [name]: value});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:80/API/contact_message", formData);
        console.log(formData);
        // Restablece el formulario después de enviar
        /*setFormData({
            name: '',
            email: '',
            birthDate: '',
            message: '',
            image: null
        });*/
    };

    const [alertMessage, setAlertMessage] = useState(null);

    // Function to show the alert
    const showAlert = (message) => {
      setAlertMessage(message);
      // Automatically hide the alert after 3 seconds (adjust as needed)
      setTimeout(() => {
        setAlertMessage(null);
      }, 4000);
    };
    return (
        <div>
            {alertMessage && (
            <div className='successAlert'>
                {alertMessage}
            </div>)}
            <div id="container">
                <h1>&bull; Contáctanos &bull;</h1>
                <div className="underline">
                </div>
                
                <div className="icon_wrapper">
                    <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                    </svg>
                </div>

                <form onSubmit={onFormSubmit} method="post" id="contact_form">
                    <div className="name">
                        <label></label>
                        <input type="text" placeholder="Nombre" name="name" onChange={onFormFill} required />
                    </div>
                    <div className="email">
                        <label></label>
                        <input type="email" placeholder="Correo Electrónico" name="email" onChange={onFormFill} required />
                    </div>
                    <div className="telephone">
                        <label></label>
                        <input type="date" placeholder="Fecha de Nacimiento" name="birthDate" onChange={onFormFill} required />
                    </div>
                    <div className="message">
                        <label></label>
                        <textarea type="text" name="message" placeholder="Mensaje" onChange={onFormFill} required></textarea>
                    </div>
                    <div className="file-upload">
                        <label className='fileLabel'><strong>Adjuntar imagen:</strong></label>
                        <br />
                        <br />
                        <input type="file" name="image" accept="image/*" onChange={onFormFill} required/>
                    </div>
                    <br />
                    <div className="submit">
                        <button type="submit" className='submitButton' id="form_button" onClick={() => showAlert('Mensaje enviado con exito!')}>Enviar</button>
                    </div>
                </form>
            </div>
            <div>
        </div>
    </div>

    );
}
export default ContactForm;
