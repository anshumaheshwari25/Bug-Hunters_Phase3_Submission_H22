import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
const Stock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});
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
        setMedicineData(data.data.data);
      }).catch((error)=>{
        console.log(error);
      })
  }
  const deleteStock=(id)=>{
      axios.delete('http://localhost:9999/deleteitem/'+id).then((data)=>{
        console.log(data);
        getData();
        // window.location.reload();
      }).catch((error)=>{
        console.log(error);
      })
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
      <div>Stock
        <table className='table table-bordered border-primary table-sm'>
          <tr>
            <th>
              Medicine Name
            </th>
            <th>
              Medicine Qty
            </th>
            <th>
              Delete Stock
            </th>
          </tr>
          {
        medicineData.map((e)=>{
          if(e.enable===1)
          {return (
            <tr>
              <td>
                    {e.itemName}
              </td>
              <td>
                    {e.itemQty}
              </td>
                <td>
                  <button className='btn btn-danger p-2 m-2' onClick={()=>{deleteStock(e._id)}}>Delete</button>
                </td>
            </tr>
          )}
        })          
        }
        </table>
        
      <form action="" onSubmit={handleSubmit(submit)}>
        <p className='row'>
          <label htmlFor="itemName" className='col-2'>Medicine Name</label>
        <input type="text" name="itemName" id="itemName" className='col-2'
        {...register("itemName",{required:true})}
        />
        </p >
        <p className='row'>
          <label htmlFor="itemQty" className='col-2'>Qty</label>
        <input type="number" name='itemQty' id='itemQty' className='col-2'
        {...register('itemQty',{required:true})}
        />
        </p>
        <input type="submit" value="+add" className='p-2' />
      </form>

    </div>
  )
}

export default Stock