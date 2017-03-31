const SELECT_BLOCK = 'SELECT_BLOCK';
const CREATE_BLOCK = 'CREATE_BLOCK';
const UPDATE_BLOCK = 'UPDATE_BLOCK';
const CHANGE_TYPE = 'CHANGE_TYPE';
const TOGGLE = 'TOGGLE';
const LOAD_BLOCKS = 'LOAD_BLOCKS';

import axios from 'axios'
// maybe one action creator that increases a type
// maybe another that decreases that type 
const CLEAR = 'CLEAR';

const initialState = {
    selected: {},
    blocks: [],
    type: 'none',
    multi: false,
  }

export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch (action.type){
    case SELECT_BLOCK:
      newState.selected = action.selected;
      break;
    case CREATE_BLOCK:
      newState.blocks = [...newState.blocks, action.selected]
      break;
    case UPDATE_BLOCK:
      newState.selected.type = newState.selected.type = action.terrain;
      break;
    case CHANGE_TYPE:
      newState.type = action.newType;
      break;
    case LOAD_BLOCKS:
      return Object.assign(initialState, {blocks: action.blocks});
    case TOGGLE:
      newState.multi = !newState.multi;
      break;
    case CLEAR:
      return initialState;
    default:
      return state
  }
  return newState;
}
export const clearTable = () => ({
  type: CLEAR
})

export const loadBlocks = (blocks) => ({
  type: LOAD_BLOCKS,
  blocks: blocks
})

export const toggleMulti = () => ({
  type: TOGGLE
})
export const selectBlock = (block) => ({
  type: SELECT_BLOCK,
  selected: block
})
export const selectType = (newTerrain) => ({
  type: CHANGE_TYPE,
  newType: newTerrain
})
export const createBlock = (block) => ({
  type: CREATE_BLOCK,
  selected: block
})

export const changeType = (newTerrain) => ({
  type: UPDATE_BLOCK,
  terrain: newTerrain
})


// TODO: have it only clear the table and have level take care of axios stuff

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
        dispatch(clearTable())

      })
      //api/block
      //axios post for each block
      //dispatch 
    } )
  }
}





/*block = {
  location
  terrain: {
    grass||water||rock||key||lock||reader
  }
}
*/