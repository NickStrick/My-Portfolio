import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contactinfo.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import ContactPopup from './ContactPopup.js';

const Contactinfo = (props) => {
    const [firstName, setFirst] = useState('')
    const [lastName, setLast] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [submitStatus, setSubmitStatus] = useState(0);

    let submitTimeout;

    // useEffect(() => {
    //     axios.get('https://vast-meadow-92170.herokuapp.com/')
    //         .then(res => console.log(res.data))
    // }, [])

    function zeroInputs(){
        setFirst('');
        setLast('');
        setNumber('');
        setEmail('');
        setMsg('');
    }
    
    function checkSubmitStatus(e){
        e.preventDefault();
        const contactInput = {
                firstName,
                lastName,
                phone: number,
                email,
                message: msg
            }
        if(submitTimeout) clearTimeout(submitTimeout);
        if (email === '' || firstName === '' || lastName === '' || msg === '' ){
            setSubmitStatus(2);
        }else{
            setSubmitStatus(1);
            zeroInputs();
            submitContact(contactInput)
        }
        
        submitTimeout = setTimeout(()=> setSubmitStatus(0), 11000)
    }

    function submitContact(contactInput) {

        
        // const sendgridUrl = 'http://localhost:5000/contact';
        const sendgridUrl = 'https://nick-strick-portfolio.herokuapp.com/contact'
        zeroInputs();

        axios.post( sendgridUrl , contactInput)
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
            <form className='contact-form' onSubmit={checkSubmitStatus}  
            onFocus={() => {
                if(submitStatus === 2){
                 setSubmitStatus(0);
                 if(submitTimeout) clearTimeout(submitTimeout);
            }}}>

                <div className='contact-div'>
                    {/* <label></label> */}
                    <div className='required'>
                    <input
                        
                        aria-label={'first-name'}
                        value={firstName}
                        onChange={handleChange}
                        placeholder='First name'
                        name='firstName'
                    /></div>
                    <div className='required'>
                    <input
                        value={lastName}
                        onChange={handleChange}
                        placeholder='Last name'
                        name='lastName'
                    /></div>
                </div>
                
                <div className='contact-div'>
                    {/* <label></label> */}
                    <div>
                    <input
                        aria-label={'last-name'}
                        value={number}
                        onChange={handleChange}
                        placeholder='Phone Number'
                        name='number'
                    /></div>
                    <div className='required'>
                    <input
                        value={email}
                        onChange={handleChange}
                        placeholder='Your Email'
                        name='email'
                        type='email'
                    /></div>
                </div>
                <textarea
                    id='contact-msg'
                    aria-label={'contact-msg'}
                    value={msg}
                    onChange={handleChange}
                    placeholder='Type your message here'
                    name='msg'
                />
                {submitStatus > 0 && <ContactPopup submitStatus={submitStatus} />}
                <button type='Submit'><FontAwesomeIcon icon='paper-plane'/> Send  &nbsp; </button>

            </form>


        </div>
    );
}


export default Contactinfo;