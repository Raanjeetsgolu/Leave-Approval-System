import React from 'react'

import { BrowserRouter as Link } from 'react-router-dom';
import AddNewEmployee from '../Admin/AddNewEmployee'
const Adminpanel = () => {
    return (
        <div className="adminpanel">
            <div className="admin_header">
                <nav>
                    <navmenu>
                        <h1>Login</h1>
                        
                        <Link to='./addnewemployee'>
                       < AddNewEmployee/>
                        </Link>
                    </navmenu>

                </nav>
            </div>
            
        </div>
    )
}

export default Adminpanel
