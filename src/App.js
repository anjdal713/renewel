import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import PostMain from './pages/post/PostMain';
import PostView from './pages/post/PostView';
import Introduction from './pages/faculty_introduction/Introduction';
import Header from './components/header/Header';
import ScrollToTop from './components/ScrollToTop';
import Background from './pages/Background';
import Footer from './components/footer/footer';
import RoadmapPage from './pages/RoadmapPage';
import Program from './pages/Program';
import Members from './pages/faculty_introduction/Members';
import StudentActivity from './pages/studentActivity';
import Global from './components/studentActivity/global';
import data from "./pages/Home/Home";
import './App.css';


function App() {
  const [hoveredId, setHoveredId] = useState(null);
  const handleHover = (id) => {
    setHoveredId(id);
  };

  return (
    <>
    <div className="App">
    <Header/>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Background />} />
          <Route exact path='/post' element={<PostMain />} />
          <Route exact path='/postView/:no' element={<PostView />} /> 
          <Route exact path='/faculty_introduction' element={<Introduction />} />
          <Route exact path='/program' element={<Program />} />
          <Route exact path='/members' element={<Members />} />
          <Route exact path='/Global' element={<Global />} />
          <Route exact path='/activity' element={<StudentActivity data={data} hoveredId={hoveredId} onHover={handleHover} />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
    <div>
    <Router>
        <Routes>
          <Route exact path='/roadmap' element={<RoadmapPage />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;