import React from 'react'
import './EmployeeDetailsPopUp.css'

const EmployeeDetailsPopUp = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <button className="close_btn">close</button>
            {props.children}
            </div>
        </div>
    ):"";
    
}

export default EmployeeDetailsPopUp

