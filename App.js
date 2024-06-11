import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer';
import Dashboard from './Dashboard';
import RegistrationForm from './RegistrationForm';


function App() {
  return (
<Router>
      <div className="w-full">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

    