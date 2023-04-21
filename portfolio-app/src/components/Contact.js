import React, {useState, useEffect} from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const {field, value} = e.target;

        return field 
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <h2>
                Contact
            </h2>
            <form className="form">
                <h3>Name:</h3>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    />
                <h3>Email Adddress</h3>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                    />
                <h3>Message:</h3>
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
        </form>
        </div>
    )
}