import React, { useState, useEffect } from 'react';
import './Contactinfo.scss';

const Contactinfo = (props) => {
    const [firstName, setFirst] = useState('')
    const [lastName, setLast] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

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
                break;
        }
    }

    return (

        <div className="contact-section" id='contact-info'><label>Send me a message!</label>
            <form className='contact-form'>

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
                    aria-label={'contact-msg'}
                    value={msg}
                    onChange={handleChange}
                    placeholder='Type your message here'
                    name='msg'
                />

            </form>


        </div>
    );
}


export default Contactinfo;