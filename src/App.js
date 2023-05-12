import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './newcomponent/header/Header';
import TVShow from './newcomponent/tvshow/TVShow';
import AllShows from './newcomponent/allshows/AllShows';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AllShows />} />
          <Route path="/tvshows/:id" element={<TVShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
