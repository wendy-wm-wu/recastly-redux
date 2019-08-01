import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  // if the action's type matches the reducer's type
  // map through the new videos array and for each video
  // check if the object.video matches the search query
  // create a new state object with the new video list
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }
};

export default videoListReducer;
