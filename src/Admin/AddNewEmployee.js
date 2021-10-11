import React,{useState} from 'react'
import './AddNewEmployee.css'
import { db } from '../firebase';
import { collection,addDoc } from '@firebase/firestore';
import {Link } from 'react-router-dom'

const AddNewEmployee = () => {
   
    const [name, setname] = useState();
    const [phoneNumber, setphoneNumber] = useState();

    const submitform =  async (e) => {
            e.preventDefault();
            await addDoc(collection(db, "employee"), {
              name,
              phoneNumber,
              age:"",
              gender:"",
              experience:"",
              approvedleave:"",
            
            });
            
            setphoneNumber("")
            setname("")
            console.log(name)
            console.log(phoneNumber)
          };
         
    return (
        <div className="addnewemployee">
           <Link className="homeback" to='./'>   Back to Home
               </Link>
            <form onSubmit={submitform}>
                <label> Name
                <input type="text" onChange={(e)=>setname(e.target.value)} required value={name} />
                </label>
                <label> Phone Number
                <input type="number" onChange={(e)=>setphoneNumber(e.target.value)} required  value={phoneNumber} />
                </label>

                
                <button type="submit" >Add Employee</button>
                
            </form>
        </div>




    )
}

export default AddNewEmployee
