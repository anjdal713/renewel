import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
import Introduction from './page/faculty_introduction/Introduction';
import Header from './component/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/postView/:no' element={<PostView />} /> 
          <Route exact path='/' element={<PostMain />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

/*
function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Introduction />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}
*/


export default App;