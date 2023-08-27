import React, { useState } from 'react'; 
import axios from 'axios'; 

const Workforce = () => {
  const [output, setOutput] = useState('');

  const runPythonScript = async () => {
    try {
      const data = { notebookPath: "D:\\VIREN\\Health\\healthcare-management-system\\Healthcare_node\\WorkforceAllocation.py" };
      const response = await axios.post("http://localhost:9999/runwork", data);
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Optimization of Allocation</h2>
      <h4>This consists of distribution and transfer health staff to various departments.</h4>
      <h5>Here, we have considered 4 types of devices as resources:</h5>
      <ul>
        <li>Ward Boys</li>
        <li>Nurses</li>
        <li>Resident Doctors</li>
        <li>Specialist Doctors</li>
      </ul>
      <h5></h5>
      <h5>We have initialized two modes of operation:</h5>
      <ul>
        <li>Emergency Operations</li>
        <li>General Operations</li>
      </ul>
      <h5>We will be alloting the resources in an optimized manner using Linear Programming.</h5>
      <h6>max_resource: [500, 600, 250, 50]</h6>
      <h6>min_resource: [300, 600]</h6>
      <br/>
      
      <button onClick={runPythonScript} className='m-auto'>Optimize Workforce</button>
      <pre>{output}</pre>
    </div>
  );
};

export default Workforce;