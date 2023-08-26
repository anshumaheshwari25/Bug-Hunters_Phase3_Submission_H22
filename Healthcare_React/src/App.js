import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Telemedicine from "./Pages/Telemedicine";
import Lab from "./Pages/Lab";
import Resource from "./Pages/Resource";
import Inventory from "./Pages/Inventory";
import WorkforcePage from "./Pages/WorkforcePage";
import Stock from "./Pages/Stock";
import Data from "./Pages/Data";

import "./App.css";

// Home element
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory Management</Link>
            </li>
            <li>
              <Link to="/workforce">Workforce Management</Link>
            </li>
            <li>
              <Link to="/resource">Resource Allocation</Link>
            </li>
            <li>
              <Link to="/telemedicine">Telemedicine Integration</Link>
            </li>
            <li>
              <Link to="/lab">Laboratory Optimization</Link>
            </li>
            <li>
              <Link to="/stock">Medicine Stock Management</Link>
            </li>
            <li>
              <Link to="/data">Data Driven Decision Making</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/workforce" element={<WorkforcePage/>} />
          <Route path="/resource" element={<Resource/>} />
          <Route path="/telemedicine" element={<Telemedicine/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/lab" element={<Lab/>} />
          <Route path="/stock" element={<Stock/>} />
          <Route path="/data" element={<Data/>} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
