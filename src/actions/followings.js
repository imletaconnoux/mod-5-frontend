function fetchedFollowings(followings){
  return{
    type: "FETCHED_FOLLOWINGS",
    payload: followings
  }
}
export function fetchFollowings(){
  const jwt = localStorage.getItem("jwtToken")
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/userfollowings`, {
      method: 'get',
      headers : {
        "Authorization": "Bearer " + jwt
      }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchedFollowings(json))
    })
  }
}

function unfollowed(follow){
  return{
    type: "UNFOLLOWED",
    payload: follow
  }
}
export function unfollow(collection){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({following_id: collection.id})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/follows/`, {
      method: 'DELETE',
      body: body,
      headers: {
       "Authorization": "Bearer " + jwt,
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(unfollowed(json))
    })
  }
}

function followed(collection){
  return {
    type: "FOLLOWED",
    payload: collection
  }
}

export function follow(collection){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({following_id: collection.id})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/follows`, {
      method: 'post',
      body: body,
      headers: {
        "Authorization": "Bearer " + jwt,
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {

      dispatch(followed(collection))
    })
  }

}

function fetchedAllCollections(json){
  return{
    type: "FETCHED_ALL_COLLECTIONS",
    payload: json
  }
}

export function fetchAllCollections(){
  const jwt = localStorage.getItem("jwtToken")
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections`, {
      method: 'get',
      headers : {
        "Authorization": "Bearer " + jwt
      }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchedAllCollections(json))
    })
  }
}
