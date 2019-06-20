import React from 'react';
import Rooms from './rooms';
import About from './about';
import ContactInfo from './contact_info';
import NewsLetter from './newsletter';
import ContactForm from './contact';

const contentStyle = {
    maxWidth: "1532px"
};

export default ({photos}) => ( 
    // <div className="w3-content" style={max-width: "1532px"}>
    <div className="w3-content" style={contentStyle}>
        <Rooms photos={photos}/>
        <About />
        <ContactInfo />
        <NewsLetter />
        <ContactForm />
    </div>

)