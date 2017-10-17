function usersReducer(state = { currentUser: null } , action){

  switch (action.type) {
    case "LOGGEDIN_USER":
      return Object.assign({}, state, {currentUser: action.payload})

    case "LOGGEDOUT_USER":
      return Object.assign({}, state, {currentUser: null})
    default:
        return state
    }
}

export default usersReducer
