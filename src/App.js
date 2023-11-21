// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './components/header/header';
import Background from './pages/Background';
import Footer from './components/footer/footer';
import './App.css';
import StudentActivity from './pages/studentActivity';

import Global from "./components/studentActivity/global";
import data from "./pages/Home/Home";

function App() {
  const [hoveredId, setHoveredId] = useState(null);
  // 마우스 호버 상태 업데이트 함수
  const handleHover = (id) => {
    setHoveredId(id);
  };

  return (
    <>
      <Header />
      <div className="App">
      <Router>
  
        <Routes>
          <Route exact path='/' element={<Background />} />

          <Route exact path='/Global' element={<Global />} />
          <Route exact path='/studentActivity' element={<StudentActivity data={data} hoveredId={hoveredId} onHover={handleHover} />} />

        </Routes>
      </Router>

      </div>
      <Footer />
    </>
  );
}

export default App;
