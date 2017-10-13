function collectionsReducer(state = { list: [] }, action){
  switch (action.type) {
    case "FETCHED_COLLECTIONS":
      return Object.assign({}, state, {list: action.payload})

    case "CREATED_COLLECTION":
      return Object.assign({}, state, {list: [...state.list, action.payload: {} ]})

    case "DELETED_COLLECTION":
      return Object.assign({}, state, {list: state.list.filter((collection) => collection.id !== action.payload.id)})

    case "UPDATED_COLLECTION_NAME":
      return Object.assign({}, state, {
        list: state.list.map((collection) => {
          if (collection.id === action.payload.id) {
            return Object.assign({}, collection, {name: action.payload.name})
          }
          return collection
        })
      })
    default:
      return state
  }
}

export default collectionsReducer
