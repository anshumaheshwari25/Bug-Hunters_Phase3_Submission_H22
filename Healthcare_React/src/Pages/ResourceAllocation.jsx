const [output, setOutput] = useState("");
import React from "react";
const ResourceAllocation = () => {
  const runPythonScript = async () => {
    try {
      const response = await axios.post("/run", {
        notebookPath: "C:/Users/modip/Desktop/myModel.ipynb",
      });

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
