import React from 'react'
import './Table1.css';

function Table1({ list, colNames, width='auto', height='auto'}) {
  return (
    <div>
{
 list.length > 0 && (
     <table className='table table-hover' cellSpacing="0" style={{width:width, height:height, padding:'5px 10px'}}>
         <thead className='.thead-dark'>
             <tr>
                 {colNames.map((headeritem, Index) => (
                     <th scope="col" key={Index}>
                            {headeritem.toUpperCase()}
                     </th>
                 ))}
             </tr>

         </thead>
        <tbody>
          {Object.values(list).map((obj, index) =>(
             <tr key={index}>
                 {Object.values(obj).map((value, index2) =>(
                <td scope="row" key={index2}> {value} </td>
                 ))}
             </tr>
              ))}   
        </tbody>
     </table>
 )
}
    </div>
  )
}

export default Table1