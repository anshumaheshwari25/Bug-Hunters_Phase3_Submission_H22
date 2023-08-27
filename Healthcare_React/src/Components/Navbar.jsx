import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Telemedicine from "../Pages/Telemedicine";
import Lab from "../Pages/Lab";
import Resource from "../Pages/Resource";
import Inventory from "../Pages/Inventory";
import WorkforcePage from "../Pages/WorkforcePage";
import Stock from "../Pages/Stock";
import Data from "../Pages/Data";

const Navbar = () => {
  return (
    <>
    <Router>
    <ul>
            <h1>
              <center>
              HealthCare Management System
              </center>
            </h1>
          <li>
              In this Project we tried to optimise some of the workloads of different Departments In a Hospital. 
          </li>
          <li>
          Deparment Includes Inventory
          </li>
          <li>
            Resource Allocation and Workforce Management
          </li>
          <li>
            Data Driven Decision Making
          </li>
          <li>
            Laboratory Testing Optimisation
          </li>
          <li>
            Telemedicine Integration
          </li>
        </ul>
    
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
        </Router>
    </>
  )
}

export default Navbar