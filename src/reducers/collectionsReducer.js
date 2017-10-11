function collectionsReducer(state = { list: [] }, action){
  switch (action.type) {
    case "FETCHED_COLLECTIONS":
      return Object.assign({}, state, {list: action.payload})

    case "CREATE_COLLECTION":
      return Object.assign({}, state, {list: [...state.collections, action.payload: {} ]})

    default:
      return state
  }
}

export default collectionsReducer
