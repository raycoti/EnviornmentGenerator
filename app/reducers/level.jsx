const CREATE_LEVEL = 'CREATE_LEVEL';
const LOAD_LEVEL = 'LOAD_LEVEL';
const SAVE_LEVEL = 'SAVE_LEVEL';
const SET_CURRENT = 'SET_CURRENT';
const SET_LEVELS = 'SET_LEVELS';
import {loadBlocks} from './grid'
import axios from 'axios';
const initialSTATE = {
  name: '',
  levels: [],
  currentLevel: {
    blocks: []
  }
}

export default function(state = initialSTATE, action){
  const newState = Object.assign({}, state);
  switch (action.type){
    case CREATE_LEVEL:
      newState.levels = [...newState.levels, action.level]
      break;
    case SET_CURRENT:
      newState.currentLevel = action.level;
      break;
    case SET_LEVELS:
      newState.levels = action.levels;
      break;
    default:
      return state;

  }
    return newState;
}
const createLevel = (level) => ({
  type: CREATE_LEVEL,
  level: level,
})
const setLevels = (levels) => ({
  type: SET_LEVELS,
  levels: levels
})

const loadALevel = (newLevel) => ({
  type: SET_CURRENT,
  level: newLevel
})

export const loadLevel = (levelId, convert) =>{
  console.log('cool')
  return (dispatch) => {
    axios.get(`/api/scene/${levelId}`)
    .then((level) => {
      console.log('this is the loaded level', level)
      const theBlocks = level.data.blocks;
      const levelBlocks = theBlocks.reduce((acc, block) => {
        const id = [block.xCoor, block.yCoor].join(',')
        acc.push({id: id, type: block.terrainType});
        return acc
      }, [])
      console.log('blockObjects', levelBlocks);
      if (convert){
        dispatch(loadALevel({name: level.data.name,
        blocks: levelBlocks}))
        dispatch(loadBlocks(levelBlocks))
      }
      else {
      dispatch(loadALevel(level.data))
      }
    })
  }
}

export const loadAll = ()=> {
  return (dispatch) => {
    axios.get('/api/scenes')
    .then((scenes) => {
      console.log('this is the response', scenes)
      dispatch(setLevels(scenes.data))
    })
  }
}


export const submitLevel = (name,blocks) => {
  console.log(blocks)
  return (dispatch) => {
  axios.post('api/scene', {
    name: name,
    })
    .then((scene)=> {
//      console.log(scene.data[0].id)
      const id = scene.data[0].id
      console.log(id);
      const makeBlocks =[];
      for (var i = 0; i <blocks.length; i++){
        const newBlock = Object.assign({level: id}, blocks[i])
        makeBlocks.push(axios.post('/api/block', newBlock))
      }

      Promise.all(makeBlocks).then(()=>{
        dispatch(createLevel())

      })
      //api/block
      //axios post for each block
      //dispatch 
    } )
  }
}


//TODO: current level has blocks,
//TODO: save level find out relations in database for this
//TODO: basically add and delete blocks to a level
//TODO: for each axios find or create blocks promise all respond with created
//TODO: when deleted make axios request to delete that thing