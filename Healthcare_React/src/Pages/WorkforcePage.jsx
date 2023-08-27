import React, { useState } from 'react'; 
import axios from 'axios'; 

const Workforce = () => {
  const [output, setOutput] = useState('');

  const runPythonScript = async () => {
    try {
      const data = { notebookPath: "D:\\VIREN\\Health\\healthcare-management-system\\WorkforceAllocation.py" };
      const response = await axios.post("http://localhost:9999/runwork", data);
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={runPythonScript}>Optimize Workforce</button>
      <pre>{output}</pre>
    </div>
  );
};

export default Workforce;