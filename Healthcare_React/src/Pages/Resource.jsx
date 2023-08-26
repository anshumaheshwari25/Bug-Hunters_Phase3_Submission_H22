import React, { useState } from 'react'; 
import axios from 'axios'; 

const Resource = () => {
  const [output, setOutput] = useState('');

  const runPythonScript = async () => {
    try {
      const data = { notebookPath: "C:\\Users\\Vinit\\OneDrive\\Desktop\\Hackout's23\\healthcare-management-system\\ResourceAllocation.py"};
      const response = await axios.post("http://localhost:9999/run", data);
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={runPythonScript}>Run Python Script</button>
      <pre>{output}</pre>
    </div>
  );
};

export default Resource; // Don't forget to export the component
