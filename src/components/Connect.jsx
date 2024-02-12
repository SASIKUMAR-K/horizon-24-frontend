import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import EventsPage from './EventsPage';
import AboutPage from './AboutPage';
import EventRegisterPage from './EventRegisterPage';
import Form from './Form';

function Connect() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/events' element={<EventsPage />}></Route>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/register/" element={<Form/>} />
      </Routes>
    </Router>
  );
}
export default Connect;