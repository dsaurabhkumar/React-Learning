import React, { useState } from 'react';
import { api_constant } from '../../constants/api.contants';

const ContactForm = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    
    const onSubmitForm = (event: any) => {
        event.preventDefault();
        // console.log(name, email);
        // console.log("Form Submitted");

        const formData = {
            name: name,
            email: email
        }

        fetch(api_constant.post, {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then((data:any) => data.json())
        .then((response:any) => console.log(response))
        .catch((error: any) => console.log(error))
    }

    return (
        <form onSubmit={onSubmitForm}>
            <label>Name</label>
            <br />
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={event => setName(event.target.value)}
            />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={event => setEmail(event.target.value)}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;