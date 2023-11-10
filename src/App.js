import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/postView/:no' element={<PostView />} />
          <Route exact path='/' element={<PostMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;