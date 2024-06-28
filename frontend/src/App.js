import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddData from './AddData';
import ShowData from './ShowData';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add-data">Add Data</Link>
            </li>
            <li>
              <Link to="/show-data">Show Data</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add-data" element={<AddData />} />
          <Route path="/show-data" element={<ShowData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
