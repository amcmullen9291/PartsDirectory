import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import DepartmentListings from './Components/DepartmentListings';
import DetailedDescription from './Components/DetailedDescription';
import About from './Components/About';

// add email form for appointments?
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/Parts/About" element={<About />} />
          <Route path="/Parts/departments/:department" element={<DepartmentListings />} />
          <Route path="/Parts/departments/:department/:partsNumber" element={<DetailedDescription />} />
        </Routes>
    </Router>
  );
}

export default App;