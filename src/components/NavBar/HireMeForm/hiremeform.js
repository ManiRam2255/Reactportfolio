import React, { useState } from 'react';
import './hiremeform.css';

const HireMeForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        jobDescription: '',
        additionalNotes: '',
        jobDescriptionFile: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your job offer details!');
        setFormData({
            name: '',
            company: '',
            email: '',
            jobDescription: '',
            additionalNotes: '',
            jobDescriptionFile: null
        });
        onClose();
    };

    return (
        <div className='hireMeFormOverlay'>
            <div className='hireMeFormContainer'>
                <button className='closeBtn' onClick={onClose}>X</button>
                <h2>Contact Me for Job Opportunities</h2>
                <form onSubmit={handleSubmit} className='hireMeForm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='company'>Company</label>
                    <input
                        type='text'
                        id='company'
                        name='company'
                        value={formData.company}
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
                    <label htmlFor='jobDescription'>Job Description</label>
                    <textarea
                        id='jobDescription'
                        name='jobDescription'
                        value={formData.jobDescription}
                        onChange={handleChange}
                    />
                    <label htmlFor='jobDescriptionFile'>Attach Job Description File (optional)</label>
                    <input
                        type='file'
                        id='jobDescriptionFile'
                        name='jobDescriptionFile'
                        onChange={handleFileChange}
                    />
                    <label htmlFor='additionalNotes'>Additional Notes</label>
                    <textarea
                        id='additionalNotes'
                        name='additionalNotes'
                        value={formData.additionalNotes}
                        onChange={handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HireMeForm;
