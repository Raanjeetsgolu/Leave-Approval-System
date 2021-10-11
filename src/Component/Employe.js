import React,{useState} from 'react'
import { db } from '../firebase'
import { collection,addDoc } from '@firebase/firestore'
// import { async } from '@firebase/util';

const Employe = () => {
    const [name, setname] = useState("");
    const [age, setage] = useState();
    const [gender, setgender] = useState();
    const [address, setaddress] = useState();
    const [experience, setexperience] = useState();

    const submithandler= async (e)=>{
        e.preventDefault();
        await addDoc(collection(db,'employee'),{
            name,
            age,
            gender,
            experience,
            address
        });
        setname("");
        setage("");
        setgender("");
        setaddress("");
        setexperience("")

    };
    return (
        <div>
            <form onSubmit={submithandler}>
            <input type="string" value={name} placeholder="name" onChange={(e)=>setname(e.target.value)} />
            <input type="number" value={age} placeholder="age" onChange={(e)=>setage(e.target.value)}/>
            <input type="string" value={gender}  placeholder="gender" onChange={(e)=>setgender(e.target.value)} />
            <input type="number" value={experience} placeholder="experienc"  onChange={(e)=>setexperience(e.target.value)}/>
            <input type="string" value={address}  placeholder="address" onChange={(e)=>setaddress(e.target.value)} />
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Employe
