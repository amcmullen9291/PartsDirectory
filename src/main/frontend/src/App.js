import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import WeeklyAds from './Components/WeeklyAds';
import DepartmentListings from './Components/DepartmentListings';
import DetailedDescription from './Components/DetailedDescription';
import About from './Components/About';
import SelectedCircularAd from './Components/SelectedCircularAd';

// add email form for appointments?
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/Parts/About" element={<About />} />
          <Route path="/Parts/Circular" element={<WeeklyAds />} />
          <Route path="/Parts/Circular/:department/:partsNumber" element={<SelectedCircularAd />} />
          <Route path="/Parts/Departments" element={<DepartmentListings />} />
          <Route path="/Parts/inventory/:department/:partsNumber" element={<DetailedDescription />} />
        </Routes>
    </Router>
  );
}

export default App;