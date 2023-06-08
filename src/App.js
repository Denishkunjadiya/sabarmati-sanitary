import React from 'react'
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Header from './header/navbar';
import Home from './home/home';
import Product from './product/product';
import Gallery from './gallery/gallery';
import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer';

import Sanitary from './product/sanitary';

import Marbel from './product/marbel';
import Glass from './product/glass';
import Ceramic from './product/ceramic';
import Balcony from './product/balcony';
import Porcelain from './product/porcelain';
import PulseLoader from "react-spinners/PulseLoader";


function App() {
  const [loading ,setLoding ] = useState(false)

  useEffect(() => {
    setLoding(true)
    setTimeout(() => {
        setLoding(false)
    },1000)
}, [])

  return (
    <div>
    {
      loading ?
      
      <PulseLoader color={'#1B1639'} loading={loading} size={40} className="load"/>

      :
      
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" exact component={Product} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />

            <Route path="/sanitary" exact component={Sanitary} />

            <Route path="/marbel" exact component={Marbel} />
            <Route path="/glass" exact component={Glass} />
            <Route path="/ceramic" exact component={Ceramic} />
            <Route path="/balcony" exact component={Balcony} />
            <Route path="/porcelain" exact component={Porcelain} />


          </Switch>

          <Header />

          <Footer/>
        </Router>
}
    </div>
  );
}

export default App
 