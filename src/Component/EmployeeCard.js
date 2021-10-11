import React from 'react'
import './EmployeeCard.css'
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    collection,
    getDocs,
   
    query
    
  } from "firebase/firestore";

  
const EmployeeCard = () => {
    
    
      
    const [tasks, setTasks] = useState([]);
// const userCollection=collection(db,"employee"), where( "name", "==", "ranjeet" );
const q = query(collection(db, "cities"));

      useEffect(()=>{
          const getUser =async ()=>{
              const data=await getDocs(q);
              setTasks(data.docs.map((doc)=>(doc.data())))
          }
          getUser();
      },[]);


    return (
        <div className= "employeeCard" >
            <h1 className="employeeCard_Header"> Details</h1>
            <div className= "employeeCard_Details" >
                {tasks.map(d=>(
                    <div>
                        
                    <p className="name"><strong> Name</strong> :{d.name} </p>
                    {/* <p className="phonenumber"> <strong> Phone Number : </strong></p> */}
                    <p className="age"> <strong> Age </strong> :{d.age} </p>
                    <p className="gender"> <strong> Gender </strong>{d.gender} </p>
                    <p className="address"> <strong> Address </strong>{d.address}  :</p>
                    <p className="yearsofexperience"> <strong>Experience  </strong> :{d.experience} yrs</p>
                    </div>
                ))}
            </div>
           
            
            
        </div>
    )
}

export default EmployeeCard
