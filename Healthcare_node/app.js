const express = require("express");
const { exec } = require("child_process");
const app = express();
const port = 9999;
const path = require("path");
const cors = require("cors");
const email=require("./AppointmentBook")
const mongoose=require("mongoose");
const  stockSchema=require("./stockSchema");


app.use(cors())
app.use(express.json());


// send mail to the patient
app.post("/mail",(req,res)=>{
  var p={email:"vinitchokshi1809@gmail.com",name:"Vinit"}
  var dname={brandName:"Dr. Shandy"}
  console.log("sdfgh",req.body)
  email(p,dname,req.body,"res")
  res.status(200).json({message:"EMAIL HAS BEEN SEND",data:"1"})
})

// 
app.post("/run", (req, res) => {
  console.log("1", req); 
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
      const regex = /Status: Optimal/m; 
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

app.post("/runwork", (req, res) => {
  console.log("1", req); // Check the contents of the request body
  const notebookPath = req.body.notebookPath;
  console.log(__dirname);
  const outputPath = path.join(__dirname, "/WorkforceAllocation.py");
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

// Inventory Crud Operation
app.post("/additem",(req,res)=>{
  try
{
  stockSchema.create(req.body).then((data)=>{
    console.log(data);
    res.status(200).json({message:"Stock Enter Successfully",data:data});
  }).catch((error)=>{
    console.log(error);
    res.status(400).json({message:"Invalid Data",error:error});
  })
}
catch(error)
{
  res.status(500).json({message:"Server Error",error:error});
}
})

app.get("/getitem",(req,res)=>{
try
{
  const data=stockSchema.find().then((data)=>{
    res.status(200).json({message:"Medicine Stock",data:data});

  }).catch((error)=>{
    res.status(404).json({message:"No Medicine Data",error:error});
  });
}
catch(error)
{
  res.status(500).json({message:"Server Error",error:error});
}
});

app.delete('/deleteitem/:id',(req,res)=>{
      try{
          const id=req.params.Id;
      }
      catch(error)
{
  res.status(500).json({message:"Server Error",error:error});
}
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect('mongodb+srv://barber:MvkGb3yXWuN79gnZ@barbercluster.hyxbhtr.mongodb.net/barber')

mongoose.connection.on("error", function(error) {
    console.log("Error connecting to the database:", error);
  });