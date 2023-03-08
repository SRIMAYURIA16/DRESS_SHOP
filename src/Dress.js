import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Dress.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import DBView from './view';
import Deleteform from './delete';
function Dress() {

    // const [dressId,setId]=useState();
    const[dressName,setDressName]=useState();
    const[quantity,setQuantity]=useState();
    const[dressSize,setDressSize]=useState();
    const[address,setAddress]=useState();
    const[open,setOpen]=useState();
    const[loading,setLoading]=useState(false);

  function handleClose(){
    setOpen(false);
  }
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const data={
        // DressId:Number(DressId),
        dressName:dressName,
        quantity: Number(quantity),
        dressSize:Number(dressSize),
        address:address,
      };
      const res=await axios.post("http://localhost:8080/dress",data);
      await console.log(res);
      await setOpen(true);
    }
    catch(e){
      console.log(e.message);
    }
    setLoading(false);
    alert("Order Confirmed");
  }
    return ( 
        <>
        <div  className='top'>
        <center>
          <div className='main'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <center>
            <h2>Fashion Field</h2>
            {/* <br></br> */}
            <h4>ORDER NOW!!!</h4>
        {/* <TextField id="outlined-basic" label="DressId" variant="outlined"
        /> <br></br> */}
        <TextField required id="outlined-basic" label="DressName" variant="outlined" 
        onChange={(event)=>setDressName(event.target.value)}/> <br></br>
        <TextField  required id="outlined-basic" label="Quantity" variant="outlined" 
        onChange={(event)=>setQuantity(event.target.value)}/><br></br>
        <TextField required id="outlined-basic" label="DressSize" variant="outlined" 
        onChange={(event)=>setDressSize(event.target.value)}/><br></br>
        <TextField
        required
          id="outlined-multiline-static"
          label="Address"
          multiline rows={4}
          onChange={(event)=>setAddress(event.target.value)}
        />
        <br></br>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        ORDER
      </Button>
      
        <br></br>
      
        </center>
    </Box>
    </div>
    </center>
    </div>
    {/* <DBView/> */}
    {/* <Deleteform/> */}
        </>
     );
}
export default Dress;