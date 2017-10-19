function usersReducer(state = { currentUser: null } , action){

  switch (action.type) {
    case "LOGGEDIN_USER":
      console.log(action.payload)
      return Object.assign({}, state, {currentUser: action.payload})

    case "LOGGEDOUT_USER":
      return Object.assign({}, state, {currentUser: null})

    case "FETCHED_CURRENT_USER":
      return Object.assign({}, state, {currentUser: action.payload})
    default:
        return state
    }
}

export default usersReducer
