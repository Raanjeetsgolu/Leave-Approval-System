import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import EmployeeDetailsPopUp from "./EmployeeDetailsPopUp";
import './Employeelist.css'

const Employeelist = () => {
  const [employee, setemployee] = useState([]);
  const [employeedetails, setemployeedetails] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "employee"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push(doc.data());
        console.log(doc.data().phoneNumber);
      });
      setemployee(tasksArray);
      console.log(tasksArray);
    });
    return () => unsub();
  }, []);

  return (
    <div className="employeelist">
      <table className="table" >
        <thead  >
          <tr >
            <th >Name</th>
            <th>Phone Number</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
        {employee.map((d) => (
          <tr key={d.phoneNumber} >
            <td> {d.name}</td>
            <td> {d.phoneNumber}</td>
            <td><div>
            <button onClick={() => setemployeedetails(true)}>Employee Details</button>
            
            <EmployeeDetailsPopUp trigger={employeedetails} settrigger={setemployeedetails}>
           
              <div className="Name_popup">
                <strong> Name :</strong> {d.name}
              </div>
              <div className="Name_phonenumber">
                <strong> Phone Number : </strong>
                {d.phoneNumber}
              </div>
              <div className="Age_popup">
                <strong> Age :</strong>
                {d.age}
              </div>

              <div className="Gender_popup">
                
                <strong> Gender : </strong>
                {d.gender}
              </div>
              <div className="Experience_popup">
                <strong> Experience :</strong>
                {d.experience} yrs
              </div>
              <div className="approvedleave_popup">
                <strong> Approved Leave :</strong>
                {d.approvedleave} 
              </div>
             
            </EmployeeDetailsPopUp>
           </div> </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employeelist;
