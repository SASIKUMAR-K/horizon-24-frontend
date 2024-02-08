import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import EventsPage from './EventsPage';
import AboutPage from './AboutPage';

function Connect() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/events' element={<EventsPage />}></Route>
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}
export default Connect;