import React from 'react'
import { Link } from "react-router-dom";

import './Adminpanel.css'
import Employeelist from './Employeelist';

const Adminpanel = () => {

    
    return (
        <div className="adminpanel">
            <div className="adminpanel_header">
                <div>Admin Login</div>
                <Link to='/addnewemployee'>
                 + New Employee
                 </Link>
                 </div>
                <Employeelist/>
             
           
            
        </div>
    )
}

export default Adminpanel
