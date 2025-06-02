import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wardrobe from './pages/Wardrobe';
import Outfits from './pages/Outfits';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wardrobe />} />
        <Route path="/outfits" element={<Outfits />} />
      </Routes>
    </Router>
  );
}

export default App;
