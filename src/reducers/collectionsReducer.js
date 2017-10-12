function collectionsReducer(state = { list: [] }, action){
  switch (action.type) {
    case "FETCHED_COLLECTIONS":
      return Object.assign({}, state, {list: action.payload})

    case "CREATED_COLLECTION":
      return Object.assign({}, state, {list: [...state.list, action.payload: {} ]})

    default:
      return state
  }
}

export default collectionsReducer
