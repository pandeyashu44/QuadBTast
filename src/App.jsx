import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Update the import statements
import ShowList from './Components/showlist';
import ShowDetails from './Components/showdetails';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes> {/* Change Switch to Routes */}
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;