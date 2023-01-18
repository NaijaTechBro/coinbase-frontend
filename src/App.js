import React from 'react';

import { Footer, Blog, Features } from './Containers';
import { Cointable, Cta, Header, Navbar, Article, Portfolio } from './Components';

import './App.css';

const App = () => {
  return (
// this is a drill
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Cointable />
      <Cta />
      <Portfolio />
      <Article />
      <Blog />
      <Features />
      <Footer />
      
      </div>
  )
}

export default App
