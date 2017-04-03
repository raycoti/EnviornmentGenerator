//this is a select  input stuff
import React, {Component} from 'react';
import { Link } from 'react-router';
//
const terainTypes = ['none', 'rock', 'grass', 'water', 'lava','goal','start','key','lock','enemy','move']
export default function(props) {
  const onCha = props.handleChange;
  return ( 
    <div className="col-md-4">
      <h3>Select</h3>
      <label className="switch">
      <input onChange={props.toggle} type="checkbox" />
      <div className="slider round"></div>
      </label>
    <h3>Terrain Types</h3>
    <select onClick ={onCha}>
      {terainTypes.map((type) => {
        return (
          <option key={type} value={type}>{type}</option>
        )
      })}
    </select>
    </div>
  )
}
