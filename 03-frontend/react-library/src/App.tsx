import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/NavBar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { Homepage } from './layouts/HomePage/Homepage';

export const App =() => {

  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}


