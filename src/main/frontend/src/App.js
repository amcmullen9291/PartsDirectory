import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import WeeklyAds from './Components/WeeklyAds';
import DepartmentListings from './Components/DepartmentListings';
import DetailedDescription from './Components/DetailedDescription';
import About from './Components/About';
import Circular from './Components/Circular';

// add email form for appointments?
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/Parts/About" element={<About />} />
          <Route path="/Parts/Circular" element={<WeeklyAds />} />
          <Route path="/Parts/Circular/previous_week" element={<Circular />} />
          <Route path="/Parts/departments/:department" element={<DepartmentListings />} />
          <Route path="/Parts/departments/:department/:partsNumber" element={<DetailedDescription />} />
        </Routes>
    </Router>
  );
}

export default App;