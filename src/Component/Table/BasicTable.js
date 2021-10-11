import React,{useMemo} from 'react'
import {useTable} from 'react-table'
import { Column } from './Column'


const BasicTable = () => {
    const columns=useMemo(()=>  Column,[])
    const data=useMemo(()=>Mock_data,[])

  const tableInstance=  useTable({
        columns:columns,
        data:data
    })
    const{
        getTableProps, getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance
    }
    return (
        <table {...getTableBodyProps()}>
            <thead  >
                <tr>
                    <th></th>
                </tr>

            </thead>
            <tbody {...getTableBodyProps}>{
                rows.map(row=>{
                    prepareRow(row)
                    return(
                    <tr {...row.getRowProps()}>
                        {rows.cells.map((cell)=>{
                            return    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                 
                    </tr>
                    )
                })
            }
                
            </tbody>
        </table>
    )
}

export default BasicTable
