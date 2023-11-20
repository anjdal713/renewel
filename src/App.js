// App.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './components/header/header';
import Background from './pages/Background';
import Footer from './components/footer/footer';
import './App.css';



function App() {

  return (
    <>
      <Header />
      <Background/>
      <Footer />
    </>
  );
}

export default App;
