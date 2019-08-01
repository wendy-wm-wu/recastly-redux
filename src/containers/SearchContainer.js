import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';


const mapDispatchToProps = dispatch => {
  // affects change on store and invokes dispatch function
  // generates action (changes in props)
  return {
    handleSearchInputChange: (q) => dispatch(handleVideoSearch(q))
  }
}

var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.


export default connect(null, mapDispatchToProps)(SearchContainer);
