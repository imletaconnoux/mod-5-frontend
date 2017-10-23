function commentsReducer(state = { list: null } , action){

  switch (action.type) {
    case "FETCHED_USER_COMMENTS":
      console.log(action.payload)
      return Object.assign({}, state, {list: action.payload})

    case "UPDATED_COMMENT":

      return Object.assign({}, state,
        {list: state.list.map((comment) =>  {
          if (comment.id === action.payload.id) {
            debugger
            return Object.assign({}, comment, {body: action.payload.body})
          }
          return comment
        })
      })
    default:
        return state
    }
}

export default commentsReducer
