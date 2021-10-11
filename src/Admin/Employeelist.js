import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import EmployeeDetailsPopUp from "./EmployeeDetailsPopUp";

const Employeelist = () => {
  const [employee, setemployee] = useState([]);
  const [trigger, settrigger] = useState(false);

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
  const styleval={
      margin:'auto',
      color:'black',


  }
  return (
    <div>
      <table className="table" style={styleval}>
        <thead style={{color:"black"}} >
          <tr >
            <th >Name</th>
            <th>Phone Number</th>
            
          </tr>
        </thead>
        {employee.map((d) => (
          <tr onClick={() => settrigger(!trigger)} >
            <td> {d.name}</td>
            <td> {d.phoneNumber}</td>
            <EmployeeDetailsPopUp trigger={trigger}>
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
                {d.gender}{" "}
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
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Employeelist;
