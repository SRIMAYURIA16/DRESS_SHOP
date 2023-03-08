import * as React from 'react';
import { Box } from '@mui/material';
import { useState} from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import './Dress.css';
import Button from '@mui/material/Button';
export default function UpdateForm() {
    const [id, setId] = useState('');
    const [dressName, setDressName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [dressSize, setDressSize] = useState("");
    const [address, setAddress] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/dress/put",

                { id:id,
                    dressName:dressName,
                    quantity:quantity,
                    dressSize:dressSize,
                    address:address

                });
            alert("Order Changed Successfully");
            setId("");
            setDressName("");
            setQuantity("");
            setDressSize("")
            setAddress("");

        }
        catch (err) {
            alert("Order Updation Failed");
        }
    }

    return (
        <div>
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
            <h4>Change the Order!!!</h4>

        <TextField id="outlined-basic" label="DressId" variant="outlined"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        /> <br></br>
        <TextField required id="outlined-basic" label="DressName" variant="outlined"
        value={dressName}
        onChange={(event)=>setDressName(event.target.value)}/> <br></br>
        <TextField  required id="outlined-basic" label="Quantity" variant="outlined" 
        value={quantity}
        onChange={(event)=>setQuantity(event.target.value)}/><br></br>
        <TextField required id="outlined-basic" label="DressSize" variant="outlined" 
        value={dressSize}
        onChange={(event)=>setDressSize(event.target.value)}/><br></br>
        <TextField
        required
          id="outlined-multiline-static"
          label="Address"
          multiline rows={4}
          value={address}
          onChange={(event)=>setAddress(event.target.value)}
        />
        <br></br>
        <Button variant="contained" onClick={save}>Update</Button>
                </center>
        <br></br>
    </Box>
    </div>
    </center>
    </div>
    </div>
        

    );
}