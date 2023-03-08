import React from 'react';
import axios from 'axios';
import { useState} from 'react';

import './delete.css';
function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');

    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/dress/delete/del?id=' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("Order Cancelled");
    }
    return (    
        <div className="bclr">
            <div className="middle">
        <>  <center>
            <h2>Cancel the order!!!</h2>
            <div>

                <input type="number" placeholder='Enter Order Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>

            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
                </center>
          
            <h2>
                {error}
            </h2>
          
        </>
        </div>
        </div>
    );
}

export default Deleteform;