function youtubeReducer(state = { isSearching: false, searchResults: [], recommendations: [], recommendationsKeys: []}, action){
  switch (action.type) {
    case "SEARCHING_VIDEOS":
      return Object.assign({}, state, {isSearching: true})
    case "SEARCHED_VIDEOS":
      return Object.assign({}, state, {searchResults: action.payload, isSearching: false})
    case "LOGGEDOUT_USER":
        return Object.assign({}, state, {searchResults: [], isSearching: false, recommendations: [], recommendationsKeys: []})
    default:
      return state
  }
}

export default youtubeReducer
