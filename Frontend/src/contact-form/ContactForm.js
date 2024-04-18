import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        message: '',
        image: null
    });

    const onFormFill = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
        ...formData,
        [name]: type === 'file' ? files[0] : value
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario al backend
        console.log(formData);
        // Restablece el formulario después de enviar
        setFormData({
        name: '',
        email: '',
        birthDate: '',
        message: '',
        image: null
        });
    };
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
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

                <form action="#" method="post" id="contact_form">
                    <div className="name">
                        <label for="name"></label>
                        <input type="text" placeholder="Nombre" name="name" id="name_input" required />
                    </div>
                    <div className="email">
                        <label for="email"></label>
                        <input type="email" placeholder="Correo Electrónico" name="email" id="email_input" required />
                    </div>
                    <div className="telephone">
                        <label for="name"></label>
                        <input type="date" placeholder="Fecha de Nacimiento" id="birthday" name="birthday" required />
                    </div>
                    <div className="message">
                        <label for="message"></label>
                        <textarea name="message" placeholder="Mensaje" id="message_input" cols="30" rows="5" required></textarea>
                    </div>
                    <div class="file-upload">
                        <label for="file" className='fileLabel'><strong>Adjuntar imagen:</strong></label>
                        <br />
                        <br />
                        <input type="file" id="file" name="file" accept="image/*" onchange="updateFileName()" required/>
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
