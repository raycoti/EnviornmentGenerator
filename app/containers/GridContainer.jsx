import { connect } from 'react-redux';
import React, { Component } from 'react';
import Grid from '../components/Grid';
import {selectBlock, createBlock, changeType} from '../reducers/grid'
const findById = () => {
  return obj.id
}

const mapStateToProps = (state) => {
  return {
    selectedBlock: state.grid.selected,
    gridBlocks: state.grid.blocks,
    multi: state.grid.type,
    select: state.grid.multi,

  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    clickedBlock(block, createNew,newType,select){
      
      dispatch(selectBlock(block))
      if(createNew){
        dispatch(createBlock(block))
      }
      
      if(select){
        dispatch(changeType(newType))
        dispatch(selectBlock({}))


      }

    }
  }
}

class GridContainer extends Component {
  constructor(){
    super()
    this.state= {
      height: 12,
      width: 12,
        }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){

    const theId = e.target.id
    const select = this.props.select;
    const found = this.props.gridBlocks.filter((obj) => {
      return obj.id === theId
    })
    const newType = this.props.multi;
    if (!found.length){ //if empty || not found
      const newBlock = {
        id: theId,
        type: 'none'
      }
      this.props.clickedBlock(newBlock,true,newType,select);
    }
    else{
      this.props.clickedBlock(found[0], false, newType, select, this.props.types)
    }

    e.stopPropagation()
  }
  getGrid(){
    return this.state.grid;

  }
  componentDidMount(){
   
  }
  render(){
    
    return (
      <Grid theType={this.props.multi} blocks={this.state} gridBlocks ={this.props.gridBlocks} id={this.props.selectedBlock.id} selectB = {this.handleClick} />
    )
  }
}



export default connect(
  mapStateToProps,mapDispatchToProps
)(GridContainer);

