import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
  return {
    levels: state.level.levels,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const LevelsContainer = (props) => {

    console.log(props.levels)
  return (
    <div>
      we here too
      <a href="http://localhost:1337/game.html">thegame</a>
      {props.levels.map((level)=>{
        return <div><Link to={ `/level/${level.id}`}> LEVEL: {level.name} </Link></div>
      })}
    </div>


  )
}
export default connect(mapStateToProps, mapDispatchToProps)(LevelsContainer);
