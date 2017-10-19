function followingsReducer(state = { list: [], allCollections: [] } , action){

  switch (action.type) {

    case "FETCHED_FOLLOWINGS":
      return Object.assign({}, state, {list: action.payload})

    case "UNFOLLOWED":
      return Object.assign({}, state, {list: state.list.filter((collection) => collection.id !== action.payload.following_id)})

    case "FETCHED_ALL_COLLECTIONS":
      return Object.assign({}, state, {allCollections: action.payload})

    default:
        return state
    }
}

export default followingsReducer
