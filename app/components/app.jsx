import React, {Component} from 'react';
import FooterContainer from '../containers/FooterContainer';
import BlockContainer from '../containers/BlockContainer';
import SidebarContainer from '../containers/SidebarContainer'
import {connect} from 'react-redux'
import {selectBlock} from '../reducers/grid'
import Navbar from './navbar'
const mapDispatchToProps = (dispatch) => {
 return  {
   select(clickable){
    if (clickable){
    dispatch(selectBlock({}))
    }
  }
}
}
const app = function ({select,children, location}) {

  const thePath = location.pathname;
  const clickClear = thePath === '/grid';
  return (
    <div id="main" className="container-fluid">
    <Navbar />
      <div onClick ={() => select(clickClear)} className="row">
        <div className="col-md-6">
          { children }
        </div>
        <SidebarContainer path={thePath} />
        <FooterContainer path={thePath} />
      </div>
      

    </div>
  );
}


export default connect(null,mapDispatchToProps)(app)