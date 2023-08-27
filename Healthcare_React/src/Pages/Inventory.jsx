import axios from 'axios';
import React, { useState } from 'react'
import './Inventory.css'
import img1 from '../Images/Future_Prediction.png'
import img2 from '../Images/Predicted_Overlap.png'
// import img2 from '../../../Images/Future_Prediction.png'
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

      <div className='overlape'>
      <img src={img2} alt="Overlaped Predicted" width='100%' height='100%' />
        <p>

      The image shows the data of some product's sales from start of  2012 to  end of 2017 .
The blue line shows past data about the product and the red line overlapping shows the predicted values of the model
Clearly the model is efficient in predicting the test data with low error rate and high accuracy
        </p>

      </div>
      <div className='future'>
<p>
This image shows the predicted values of future of the product which is a generalised and could be medicines and equipments at hospital.
The blue line again show the previous sales of the product and the red line shows the predicted values of the product from start of 2018 to end of 2018.
The predicted values are evaluated by the trained model
<a href='https://github.com/kxrxn08/healthcare-management-system/blob/master/product-demand-forecast.ipynb'><br/>github notebook link</a>
</p>
<img src={img1} alt="Future Predicted" width='100%' height='100%' />
      </div>
      <div>
      </div>
    </div>
  )
}

export default Inventory