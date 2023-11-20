import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostMain from './pages/post/PostMain';
import PostView from './pages/post/PostView';
import Introduction from './pages/faculty_introduction/Introduction';
import Header from './components/header/Header';
import ScrollToTop from './components/ScrollToTop';
import Background from './pages/Background';
import Footer from './components/footer/footer';
import RoadmapPage from './pages/RoadmapPage';
//import Program from './pages/program';


function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Router>
      <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Background />} />
          <Route exact path='/post' element={<PostMain />} />
          <Route exact path='/postView/:no' element={<PostView />} /> 
          <Route exact path='/faculty_introduction' element={<Introduction />} />
          <Route exact path='/roadmap' element={<RoadmapPage />} />
          
        </Routes>
      </Router>
    </div>
    <Footer/>
    </>
  );
}


export default App;