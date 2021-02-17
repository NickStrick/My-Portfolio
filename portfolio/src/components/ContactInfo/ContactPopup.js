import React from 'react';
import './ContactPopup.scss';

const ContactPopup = (props) => {
    let status = props.submitStatus;
    let popColor;
    if (status > 0 && status < 2){
        popColor = 'green';
    } else if(status > 1){
        popColor = 'red';
    }
    console.log(status, popColor)
    return (

        <div className={`contact-popup-container ${popColor}`} >
            <div className='contact-popup'>
                { status == 1 && <p>Your message has successfully been sent to Nick!</p>}
                { status == 2 && <p>Not all the required fields are filled!</p>}

            </div>
        </div>
    );
}


export default ContactPopup;