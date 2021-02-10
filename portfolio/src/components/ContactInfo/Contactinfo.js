import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contactinfo.scss';

const Contactinfo = (props) => {
    const [firstName, setFirst] = useState('')
    const [lastName, setLast] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(() => {
        axios.get('https://vast-meadow-92170.herokuapp.com/')
            .then(res => console.log(res.data))
    }, [])

    function submitContact(e) {
        e.preventDefault();
        const contactInput = {
            firstName,
            lastName,
            phone: number,
            email,
            message: msg
        }

        axios.post('https://vast-meadow-92170.herokuapp.com/contact', contactInput)
            .then(res => console.log('successful submit: ', !!res.data))
            .catch(err => console.log('contact submit atempt fail', err))
    }


    function handleChange(e) {
        switch (e.target.name) {
            case 'firstName':
                setFirst(e.target.value)
                break;
            case 'lastName':
                setLast(e.target.value)
                break;
            case 'number':
                setNumber(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'msg':
                setMsg(e.target.value)
                // SetNewSize(e.target)
                break;
        }
    }


    return (

        <div className="contact-section" id='contact-info-id'><label className='contact-head'>Send me a message!</label>
            <form className='contact-form' onSubmit={submitContact} >

                <div className='contact-div'>
                    {/* <label></label> */}
                    <input
                        aria-label={'first-name'}
                        value={firstName}
                        onChange={handleChange}
                        placeholder='First name'
                        name='firstName'
                    />
                    <input
                        value={lastName}
                        onChange={handleChange}
                        placeholder='Last name'
                        name='lastName'
                    />
                </div>
                <div className='contact-div'>
                    {/* <label></label> */}
                    <input
                        aria-label={'last-name'}
                        value={number}
                        onChange={handleChange}
                        placeholder='Phone Number'
                        name='number'
                    />
                    <input
                        value={email}
                        onChange={handleChange}
                        placeholder='Your Email'
                        name='email'
                    />
                </div>
                <textarea
                    id='contact-msg'
                    aria-label={'contact-msg'}
                    value={msg}
                    onChange={handleChange}
                    placeholder='Type your message here'
                    name='msg'
                />
                <button type='Submit'>➤ Send  &nbsp; </button>

            </form>


        </div>
    );
}


export default Contactinfo;