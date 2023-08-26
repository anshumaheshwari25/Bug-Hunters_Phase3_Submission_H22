const express = require("express");
const { exec } = require("child_process");
const app = express();
const port = 9999;
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/run", (req, res) => {
  console.log("1", req); // Check the contents of the request body
  const notebookPath = req.body.notebookPath;
  console.log(__dirname);
  const outputPath = path.join(__dirname, "/ResourceAllocation.py");
  console.log(outputPath);
  exec(`python ${notebookPath}`, (pythonExecutionError, stdout, stderr) => {
    if (pythonExecutionError) {
      console.error("Python execution error:", pythonExecutionError);
      console.log(1);
      res.status(500).json({ error: "Python script execution failed." });
      return;
    } else {
      const regex = /Status: Optimal/m; // Use the 'm' flag to match multi-line text
      const match = stdout.match(regex);
      console.log("Python script output:", stdout);
      if (match) {
        const startIndex = match.index;
        const lines = stdout.split("\n");
        const indexOfStatusLine = lines.findIndex((line) =>
          line.includes(match[0])
        );

        if (indexOfStatusLine !== -1) {
          const linesBelow = lines.slice(indexOfStatusLine + 1);
          
          console.log(linesBelow.join("\n").split('.0'));
          res.json({ output: linesBelow.join("\n").split('.0') });
        } else {
          console.log("Status line found, but lines below not available");
        }
      } else {
        console.log("Status not found");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});