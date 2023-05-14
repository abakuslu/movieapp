import {useState} from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Tvseries from './pages/Tvseries/Tvseries';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Trending />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<Tvseries />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
