import React, { useState } from 'react';
import {Route, IndexRoute} from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import ProductListComponent from '../components/ProductList';


const OurCoffeeInfo = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <ProductListComponent/>
            <Footer/>
        </>
    )
}

export default OurCoffeeInfo