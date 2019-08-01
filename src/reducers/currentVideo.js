import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // our previous state is an object with 1 object
  // if the action's type matches the reducer's type
  // we create a new state object with the new video
  // otherwise we return previous state object
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
