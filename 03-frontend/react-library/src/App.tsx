import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/NavBar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { Homepage } from './layouts/HomePage/Homepage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export const App = () => {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className ='flex-grow-1'>
      <Switch>
        <Route path='/' exact>
          <Redirect to= '/home'/>
        </Route>
        <Route path='/home'>
        <Homepage />
        </Route>
        <Route path='/search'>
          <SearchBooksPage />
        </Route>
      </Switch>
      </div>
      <Footer />
    </div>
  );
}


