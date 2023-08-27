import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
const Inventory = () => {
  
  const [medicineData,setMedicineData]=useState([]);
  const submit=(data)=>{
    console.log(data);
    axios.post("http://localhost:9999/additem",data).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })
  }
  const getData=()=>{
      axios.get('http://localhost:9999/getitem').then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log(error);
      })
  }
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Inventory Management</h2>  
      <h5>Inventory management is the process of organizing, tracking, and controlling the storage and movement of products and supplies in a healthcare facility.</h5>    
    </div>
  )
}

export default Inventory