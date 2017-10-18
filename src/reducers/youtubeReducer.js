function youtubeReducer(state = { isSearching: false, youtubeResults: [], collectionsResults: [], recommendationsKeys: []}, action){
  switch (action.type) {
    case "SEARCHING_VIDEOS":
      return Object.assign({}, state, {isSearching: true})
    case "SEARCHED_VIDEOS":
      return Object.assign({}, state, {youtubeResults: action.payload, isSearching: false})
    case "LOGGEDOUT_USER":
      return Object.assign({}, state, {youtubeResults: [], isSearching: false, recommendations: [], recommendationsKeys: []})
    case "SEARCHED_COLLECTIONS":
      return Object.assign({}, state, {collectionsResults: action.payload})
    default:
      return state
  }
}

export default youtubeReducer
