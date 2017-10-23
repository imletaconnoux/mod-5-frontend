function fetchedUserComments(comments){
  return {
    type: "FETCHED_USER_COMMENTS",
    payload: comments
  }
}

export function fetchUserComments(){
  const jwt = localStorage.getItem("jwtToken")
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/usercomments`, {
      method: 'get',
      headers: {
       "Authorization": "Bearer " + jwt,
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)

      dispatch(fetchedUserComments(json))
    })
  }
}

function updatedComment(comment){
  return{
    type: "UPDATED_COMMENT",
    payload: comment
  }

}


export function updateComment(id, commentBody){
  const body = JSON.stringify({id: id, body: commentBody})
  const jwt = localStorage.getItem("jwtToken")
  return function(dispatch){

    fetch(`http://localhost:3000/api/v1/comments/${id}`, {
      method: 'PATCH',
      body: body,
      headers: {
      "Authorization": "Bearer " + jwt,
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)

      dispatch(updatedComment(json))
    })
  }
}
