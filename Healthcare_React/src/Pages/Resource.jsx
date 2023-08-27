import React, { useState } from 'react'; 
import axios from 'axios'; 

const Resource = () => {
  const [output, setOutput] = useState('');

  const runPythonScript = async () => {
    try {
      const data={
        notebookPath:"ResourceAllocation.py"
      }
      // const data = { notebookPath: "C:\\Users\\Vinit\\OneDrive\\Desktop\\Hackout's23\\healthcare-management-system\\ResourceAllocation.py"};
      // const data = { notebookPath: "D:\\VIREN\\Health\\healthcare-management-system\\ResourceAllocation.py" };
      const response = await axios.post("http://localhost:9999/run", data);
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Utilization of Resources</h2>
      <h4>This consists of distribution and transfer health resources to various departments.</h4>
      <h5>Here, we have considered 3 types of devices as resources:</h5>
      <ul>
        <li>General Devices (Blood Pressure Machine)</li>
        <li>Surgical Devices (Surgical display/light)</li>
        <li>Emergency Devices (Oxygen Concentrator)</li>
      </ul>
      <h5></h5>
      <h5>We have initialized two modes of operation:</h5>
      <ul>
        <li>General Operations</li>
        <li>Emergency Operations</li>
      </ul>
      <h5>We will be alloting the resources in an optimized manner using Linear Programming.</h5>
      <h6>max_resource: [500, 600, 250]</h6>
      <h6>min_resource: [550, 300]</h6>
      <br/>
      <button onClick={runPythonScript}>Optimize Resources</button>
      <pre>{output}</pre>
    </div>
  );
};

export default Resource;
