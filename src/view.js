import React,{ useEffect,useState} from "react";
import './view.css';
import axios from "axios";
function DBView(){
    const [content, addContent]=useState([]);
    useEffect(()=>{

    axios.get('http://localhost:8080/dress/get').then(function (response) {
    // console.log(response.data);
    addContent(response.data);
    });
    })
    return(
        <div className="bimg">
        <div className="c1">
            <table>
                <tr>
                    <th>ID</th>
                    <th>DressName</th>
                    <th>Quantity</th>
                    <th>DressSize</th>
                    <th>Address</th>
                </tr>
                {content.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.dressName}</td>
                        <td>{value.quantity}</td>
                        <td>{value.dressSize}</td>
                        <td>{value.address}</td>
                    </tr>
                ))}
                    
            </table>
            {/* <div id="deleteUser">
                    Delete User:
                    <input id="delete-input" type="text"></input>
            </div> */}
        </div>
        </div>
    )
}
export default DBView;