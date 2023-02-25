import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Record from './pages/record.js';
import Upload from './pages/upload.js';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/record' element={<Record/>} />
        <Route path='/upload' element={<Upload/>} />
    </Routes>
    </Router>
);
}
  
export default App;