import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from './header/menu';
import Slider from './slider/slider';
import Tiles from './tiles/tiles';
import Sanitary from './sanitary/sanitary';
import Gallery from './gallery/gallery';
import Contact from './contact/contact';

import Glass from './tiles/glass';
import Balcony from './tiles/balcony';
import Ceramic from './tiles/ceramic';
import Porcelain from './tiles/porcelain';

import Login from './login/login';

import ClockLoader from "react-spinners/ClockLoader";


function App() {

  const [loading, setLoding] = useState(false)

  useEffect(() => {
    setLoding(true)
    setTimeout(() => {
      setLoding(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        loading ?

          <ClockLoader color={'#1B1639'} loading={loading} size={100} className="load" />

          :
          <Router>
            <Header />
            <Switch>


              <Route path="/" exact component={Slider} />
              <Route path="/login" exact component={Login} />
              <Route path="/tiles" exact component={Tiles} />
              <Route path="/sanitary" exact component={Sanitary} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/contact" exact component={Contact} />

              <Route path="/glass" exact component={Glass} />
              <Route path="/balcony" exact component={Balcony} />
              <Route path="/ceramic" exact component={Ceramic} />
              <Route path="/porcelain" exact component={Porcelain} />



            </Switch>
          </Router>
      }
    </>
  );
}

export default App;
