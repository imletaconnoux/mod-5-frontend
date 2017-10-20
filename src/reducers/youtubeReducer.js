function youtubeReducer(state = { isSearching: false, youtubeResults: [], collectionsResults: [], relatedVideos: []}, action){
  switch (action.type) {
    case "SEARCHING_VIDEOS":
      return Object.assign({}, state, {isSearching: true})
    case "SEARCHED_VIDEOS":
      return Object.assign({}, state, {youtubeResults: action.payload, isSearching: false})
    case "LOGGEDOUT_USER":
      return Object.assign({}, state, {youtubeResults: [], isSearching: false, collectionsResults: []})
    case "SEARCHED_COLLECTIONS":
      return Object.assign({}, state, {collectionsResults: action.payload})
    case "FETCHED_RELATED_VIDEOS":
      return Object.assign({}, state, {relatedVideos: action.payload})
    case "CLEAR_RELATED_VIDEOS":
      return Object.assign({}, state, {relatedVideos: []})
    default:
      return state
  }
}

export default youtubeReducer
