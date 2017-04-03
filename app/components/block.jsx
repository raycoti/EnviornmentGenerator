import React, {Component} from 'react';
import { Link } from 'react-router';

export default function(props) {
 //console.log('hi hel',props)
 const isActive = props.id=== props.coor;
 //const exists = 
 var type= false;
 //console.log('size', props.blocks.length)
 const size = Object.keys(props.blocks).length
 if(size){
   if(props.blocks[props.coor]){
     //console.log('theblocks',props.blocks[props.coor])
     var theType=props.blocks[props.coor].type
     //console.log(theType)
     //console.log(typeof theType)
     type = true;
   }
 }
 //console.log('que',theType)
 
  return (
    <th className={isActive ? `Active` : (type? theType:'none')} id={props.coor} key = {props.coor}>
    {/*<img className="img-thumbnail" src="/terrain/grass1.png" />*/}
      
    </th>
  )
}