// src/app.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  // Import Home page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for other pages (About, Contact, etc.) */}
      </Routes>
    </Router>
  );
}

export default App;
