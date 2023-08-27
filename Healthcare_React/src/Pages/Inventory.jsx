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
    <div>Inventory
      
    </div>
  )
}

export default Inventory