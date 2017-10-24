function topicsReducer(state = { list: null, results: []} , action){

  switch (action.type) {
    case "FETCHED_TOPICS":
      return Object.assign({}, state, {list: action.payload})
      
    default:
        return state
    }
}

export default topicsReducer
