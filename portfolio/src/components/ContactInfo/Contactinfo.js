import React, { useState, useEffect } from 'react';
import './Contactinfo.scss';

const Contactinfo = (props) => {
    const [firstName, setFirst] = useState('')
    const [lastName, setLast] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const [getTex, setTex] = useState(0)
    // console.log('getTex: ', getTex)

    // useEffect(() => {
    //     const myTex = document.getElementById('contact-msg')
    //     myTex.addEventListener('keypress', function (e) {
    //         // console.log(e.target, e.key);
    //         texSetNewLine(e.target, e.key)

    //     })
    // }, [])

    // function texSetNewLine(tex, key) {
    //     if (key && key === 'Enter') {
    //         console.log('add line')
    //     }
    //     if (tex.value.length > 80 && tex.value.length % 82 == 0) {
    //         console.log('add line')
    //     }

    // }

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

    // function SetNewSize(textarea) {
    //     // console.log(textarea)
    //     // console.log('getTex: ', getTex)
    //     if (textarea.value.length)
    //     setTex(textarea.value.length)

    //     if (textarea.rows <= 20) {
    //         textarea.rows += 1;
    //     } else {
    //         // textarea.cols = 10;
    //         // textarea.rows = 15;
    //     }
    // }

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
                    id='contact-msg'
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