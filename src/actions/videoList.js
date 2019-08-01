var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  // action object
  // type: LIST
  // videos: array of videos
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;
