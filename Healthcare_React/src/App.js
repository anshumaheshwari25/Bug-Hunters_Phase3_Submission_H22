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
  const click=(id)=>{
    const buttons = document.querySelectorAll(".buttons");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === id.toString()) {
        buttons[i].classList.add("btn")
        buttons[i].classList.add("btn-primary");
      } else {
        buttons[i].classList.remove("btn") 
        buttons[i].classList.remove("btn-primary");
      }
    }
  }
  return (
    <Router>
      <div className="App">
      {/* <div className="App">
      <div className="row">
  <div className="col-4">
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
      <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-inventory" role="tab" aria-controls="list-profile">Inventory Management</a>
      <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-workforce" role="tab" aria-controls="list-messages">Workforce Management</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-resource" role="tab" aria-controls="list-settings">Resource Allocation</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-telemedicine" role="tab" aria-controls="list-telemedicine">Telemedicine Integration</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-laboratory" role="tab" aria-controls="list-laboratory">Laboratory Optimisation</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-medicine" role="tab" aria-controls="list-laboratory">Medicine Stock Management</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-data" role="tab" aria-controls="list-data">Data Driven Decision Making</a>
    </div>
  </div>
  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
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

      </div> */}
      {/* <div className="tab-pane fade" id="list-inventory" role="tabpanel" aria-labelledby="list-profile-list">
        <Inventory/>
        </div>
      <div className="tab-pane fade" id="list-workforce" role="tabpanel" aria-labelledby="list-messages-list">
        <WorkforcePage/>
              </div>
      <div className="tab-pane fade" id="list-resource" role="tabpanel" aria-labelledby="list-settings-list">
        <Resource/>
        </div>
      <div className="tab-pane fade" id="list-telemedicine" role="tabpanel" aria-labelledby="list-settings-list">
        <Telemedicine/>
        </div>
      <div className="tab-pane fade" id="list-laboratory" role="tabpanel" aria-labelledby="list-settings-list">
        <Lab/>
        </div>
      <div className="tab-pane fade" id="list-medicine" role="tabpanel" aria-labelledby="list-settings-list">
        <Stock/>
        </div>
      <div className="tab-pane fade" id="list-data" role="tabpanel" aria-labelledby="list-settings-list">
        <Data/>
        </div> */}
        <nav className="d-flex flex-column">
          <ul>
            <li>
              <button className=" buttons mt-2" id='btn1' onClick={()=>{click('btn1')}}>
              <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button  className=" buttons mt-2" id='btn2'  onClick={()=>{click('btn2')}}>

              <Link to="/resource">Resource Allocation</Link>
              </button>
            </li>
            <li>
              <button  className=" buttons mt-2" id='btn3'  onClick={()=>{click('btn3')}}>

              <Link to="/workforce">Workforce Management</Link>
              </button>
            </li>
            <li>
              <button  className=" buttons mt-2" id='btn4'  onClick={()=>{click('btn4')}}>

              <Link to="/lab">Laboratory Optimization</Link>
              </button>
            </li>
            <li>
              <button  className=" buttons mt-2" id='btn5'  onClick={()=>{click('btn5')}}>
              <Link to="/telemedicine">Telemedicine Integration</Link>
              </ button>
            </li>
            <li>
              <button  className=" buttons mt-2" id='btn6'  onClick={()=>{click('btn6')}}>

              <Link to="/stock">Medicine Stock Management</Link>
              </button>
            </li>
            <li>
              <button  className=" buttons mt-2" id='btn7'  onClick={()=>{click('btn7')}}>
              <Link to="/inventory">Inventory Management</Link>
              </button>
            </li>
            <li>
              <button  className=" buttons mt-2" id='btn8'  onClick={()=>{click('btn8')}}>

              <Link to="/data">Data Driven Decision Making</Link>
              </button>
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
