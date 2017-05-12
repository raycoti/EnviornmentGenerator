import React, { Component } from 'react';


const newTable= function(props) {
  console.log(props)
  return(
    <table>
    <tbody>
  {theGrid.map((row)=>{
      return (
        <tr>
        {theGrid.map((colomn)=>{
        return(
          <th>  </th>
          )})}
        </tr>
        )})}
    </tbody>
    </table>
  )
}

export default newTable;