import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Message sent!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='contactFormOverlay'>
            <div className='contactFormContainer'>
                <button className='closeBtn' onClick={onClose}>X</button>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit} className='contactForm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
