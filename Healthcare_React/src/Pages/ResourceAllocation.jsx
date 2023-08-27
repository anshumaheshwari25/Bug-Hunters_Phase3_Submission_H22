import React from "react";
import pyfile from './ResourceAllocation.py'
import axios from "axios";
// import file from "C:/Users/Vinit/OneDrive/Desktop/Hackout's23/healthcare-management-system/ResourceAllocation.py";
const ResourceAllocation = () => {
  const [output, setOutput] = useState("");
  const runPythonScript = async () => {
    try {
      const data={notebookPath: "perin"}
      // const response = await axios.post("http://localhost:9999/run", data);
      // axios.post("http://localhost:9999/run",{notebookPath: "perin"} ).then((data)=>{
      //   console.log(data)
      // }).catch((error)=>{
      //   console.log("error",error)
      // })
      axios.post('http://localhost:9999/run').then((data)=>{
        console.log(data);
      })
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
export default ResourceAllocation;
