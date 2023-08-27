import React, { useState } from 'react'; 
import axios from 'axios'; 

const Resource = () => {
  const [output, setOutput] = useState('');

  const runPythonScript = async () => {
    try {
      const data = { notebookPath: "D:\\VIREN\\Health\\healthcare-management-system\\ResourceAllocation.py" };
      const response = await axios.post("http://localhost:9999/run", data);
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Optimization of Allocation</h2>
      <button onClick={runPythonScript}>Optimize Resources</button>
      <pre>{output}</pre>
    </div>
  );
};

export default Resource;
