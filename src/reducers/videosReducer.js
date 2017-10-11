function videosReducer(state = { isSearching: false, searchResults: [], recommendations: [], recommendationsKeys: []}, action){
  switch (action.type) {
    case "SEARCHING_VIDEOS":
      return Object.assign({}, state, {isSearching: true})
    case "SEARCHED_VIDEOS":
      return Object.assign({}, state, {searchResults: action.payload, isSearching: false})
    default:
      return state
  }
}

export default videosReducer
