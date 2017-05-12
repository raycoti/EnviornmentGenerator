//TODO: 
import { connect } from 'react-redux';
import React, { Component } from 'react';
import LevelContainer from './LevelContainer';
class FooterContainer extends Component {
  constructor(){
    super()
  }

  render(){
    console.log(this.props.path)
    const thePath = this.props.path;
    return(
      thePath === '/grid' ? (<LevelContainer />) : <div></div>
    )
  }
}

export default FooterContainer;