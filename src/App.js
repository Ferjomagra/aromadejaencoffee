import React from 'react';
import './App.css';

import Home from './pages'
import ContactUs from './pages/contactus';
import Ourcafeteria from './pages/OurCafeteria';
import OurcoffeeInfo from './pages/OurCoffeeInfo';
import AboutUsInfo from './pages/AboutUs';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contactus" component={ContactUs} exact/>
        <Route path="/Ourcafeteria" component={Ourcafeteria} exact/>
        <Route path="/Ourcoffee" component={OurcoffeeInfo} exact/>
        <Route path="/AboutUs" component={AboutUsInfo} exact/>
      </Switch>

    </Router>
  );
}

export default App;
