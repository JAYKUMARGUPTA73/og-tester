import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import { TaskViewer } from './components/TaskViewer'; // Assuming TaskViewer is default exported
import Application from './components/Application';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactUs />} />
          <Route path="/viewer" element={<TaskViewer />} />
          <Route path="/app" element={<Application />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
