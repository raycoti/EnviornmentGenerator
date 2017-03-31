const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const CREATE_READER = 'CREATE_READER';
const initialState = {
  currentReader: {
    message: '',
    location: {x:0,y:0}
  }, //want to remove this message by id
  readers: []
};


export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch (action.type){
    case CREATE_READER:
      newState.currentReader = action.reader;
      newState.readers = [...newState.readers, action.reader]
      break;
    case UPDATE_MESSAGE:
      newState.currentReader.message = action.message;
      break;
    default:
      return state
  }
  return newState;
}
