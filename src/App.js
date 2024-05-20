import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopRatedPage from './components/TopRatedPage';
import UpcomingPage from './components/UpcomingPage';
import MovieDetailPage from './components/MovieDetailPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/top-rated" element={<TopRatedPage />} />
          <Route exact path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
