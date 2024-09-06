import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/NavBar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { Homepage } from './layouts/HomePage/Homepage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';

export const App = () => {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Homepage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}


