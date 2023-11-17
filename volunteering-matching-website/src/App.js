import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'

const App = () => {
  
  return (
    <>
      <BrowserRouter>
            <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App
