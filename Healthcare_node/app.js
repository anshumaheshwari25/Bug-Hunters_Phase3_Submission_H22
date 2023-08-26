const express=require("express");
const app=express();
const port=9999;
const cors=require('cors');
app.use(cors())

app.post('/run', (req, res) => {
    console.log(req.body); // Check the contents of the request body
    const notebookPath = req.body.notebookPath;
    const outputPath = path.join(__dirname, 'script.py');
    console.log(outputPath);
    exec(`python3 ${notebookPath}`, (pythonExecutionError, stdout, stderr) => {
      if (pythonExecutionError) {
        console.error('Python execution error:', pythonExecutionError);
        res.status(500).json({ error: 'Python script execution failed.' });
        return;
      }
  
      console.log('Python script output:', stdout);
      res.json({ output: stdout });
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
