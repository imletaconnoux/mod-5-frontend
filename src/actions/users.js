function loggedinUser(user){
  return {
    type: "LOGGEDIN_USER",
    payload: user
  }
}

export function loginUser(loginParams){
  const body = JSON.stringify(loginParams)
  return function(dispatch){
    fetch("http://localhost:3000/login", {
    method: 'post',
    body: body,
    headers: {
          "Accept": "application/json",
          "Content-Type":"application/json"
        }
      })
    .then((res) => res.json())
    .then((json) => {

      if (json.user) {
      localStorage.setItem("jwtToken", json.jwt)
      dispatch(loggedinUser(json.user))
      } else {
      window.alert(json.message)
    }
    })
  }
}

function loggedoutUser(){
  return{
    type: "LOGGEDOUT_USER",
  }
}

export function logoutUser(){
  return function(dispatch){
    localStorage.removeItem("jwtToken")
    dispatch(loggedoutUser())
  }
}

export function signupUser(loginParams){
  const body = JSON.stringify(loginParams)
  return function(dispatch){
  fetch("http://localhost:3000/api/v1/users", {
    method: 'post',
    body: body,
    headers: {
      "Accept": "application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem("jwtToken", json.jwt)
      dispatch(loggedinUser(json.user))
    })
  }
}
