import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';
import App from './components/app';
import GridContainer from './containers/GridContainer';
import BlockContainer from './containers/BlockContainer';
import LevelsContainer from './containers/LevelsContainer';
import LoadContainer from './containers/LoadContainer';
import GameContianer from './containers/GameContainer'
import {loadAll, loadLevel} from './reducers/level';
import {loadALevel} from './reducers/grid'

const loadScenes = ()=> {
  store.dispatch(loadAll())
}


const onLevelEnter = function (nextRouterState) {
  const levelId = nextRouterState.params.id;
  console.log(levelId)
  store.dispatch(loadLevel(levelId, true));
};
const onGameEnter = function (nextRouterState) {
  const levelId = nextRouterState.params.id;
  console.log(levelId)
  store.dispatch(loadLevel(levelId, false));
};


export default () => {
  return (
    <Provider store = {store}>
      <Router history={hashHistory}>
        <Route path ="/" component = {App}>
          <Route path="/grid" component={GridContainer} />
          <Route path ="/levels" component={LevelsContainer} onEnter={loadScenes} />
            <Route path = "/level/:id" component={GridContainer} onEnter={onLevelEnter} />
          <Route path="game/:id" component={GameContianer} onEnter={onGameEnter} />
          <IndexRedirect to="/grid" />
        </Route>
      </Router>
    </Provider>
  )
}

//might not need :id route at all
            //<Route path = "/level/:id" component={LoadContainer} />
