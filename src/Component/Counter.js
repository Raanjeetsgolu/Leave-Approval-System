
import React ,{useState} from 'react'

const Counter = () => {
   
    const [textsearch, settextsearch] = useState()

   const names = [ "Juditha", "Nyssa", "Nikoletta", "Fedora", "Flo", "Irena", "Timoteo", "Andy", "Melisande", "Colette" ];
    return (
        <div>
            <input type="text" value={textsearch} onChange={(e)=>settextsearch(e.target.value)}/>
            <ol>
            {/* {names.filter(names.includes(count)).map(filtername=>(
                        <li>{filtername}</li>
            ))} */}
{names.filter(name => name.toUpperCase().includes(textsearch.toUpperCase())).map(filteredName => (
    <li>
      {filteredName}
    </li>

))}
            </ol>
            
        </div>
    )
}

export default Counter
