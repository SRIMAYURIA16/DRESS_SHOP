import React from 'react';

import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './delete';
import Dress from './Dress';
import DBView from './view';
import UpdateForm from './update';
function Routing(){
    return(
        <>
        <Router>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to="/Dress" class="nav-link">Order Now</Link>
  </li>
  <li class="nav-item">
    <Link to="/view" class="nav-link">Your Orders</Link>
  </li>
  <li class="nav-item">
    <Link to="/delete" class="nav-link">Cancel your orders</Link>
  </li>
  <li class="nav-item">
    <Link to="/update" class="nav-link">Change the Order</Link>
  </li>

  
</ul>
<Routes>
  <Route path="/Dress" element={<Dress/>}/>
  <Route path="/view" element={<DBView/>}/>
  <Route path="/delete" element={<Deleteform/>}/>
  <Route path="/update" element={<UpdateForm/>}/>
  
</Routes>
    </Router>
        </>
    );
}
export default Routing;
