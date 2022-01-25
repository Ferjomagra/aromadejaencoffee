import React, { useState } from 'react';
import {Route, IndexRoute} from 'react-router';
import Footer from '../components/Footer';
import Mainview from '../components/Mainview';
import Navbar from '../components/Navbar'
import Ourcafeteria from '../components/Ourcafeteria';
import Sidebar from '../components/Sidebar';
import Ourcoffee from '../components/Ourcoffee'
import Recipes from '../components/Recipes';
import AboutUs from '../components/AboutUs';


const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Mainview/>
            <Ourcafeteria/>
            <Ourcoffee/>
            <AboutUs/>
            <Footer/>

        </>
    )
}

export default Home