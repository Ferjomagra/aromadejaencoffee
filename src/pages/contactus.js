import React, { useState } from 'react';
import {Route, IndexRoute} from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import ContactUsComponent from '../components/ContactUs';


const ContactUs = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <ContactUsComponent/>
            <Footer/>
        </>
    )
}

export default ContactUs