function followingsReducer(state = { list: [] } , action){

  switch (action.type) {

    case "FETCHED_FOLLOWINGS":
      return Object.assign({}, state, {list: action.payload})

    case "UNFOLLOWED":
      return Object.assign({}, state, {list: state.list.filter((collection) => collection.id !== action.payload.following_id)})
    default:
        return state
    }
}

export default followingsReducer
