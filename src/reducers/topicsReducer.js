function topicsReducer(state = { list: null, results: []} , action){

  switch (action.type) {
    case "FETCHED_TOPICS":
      return Object.assign({}, state, {list: action.payload})

    case "SEARCHED_TOPIC_VIDEOS":
      return Object.assign({}, state, {results: action.payload})

    case "CLEAR_TOPIC_VIDEOS":
      return Object.assign({}, state, {results: []})

    default:
        return state
    }
}

export default topicsReducer
