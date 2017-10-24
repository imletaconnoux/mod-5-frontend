function fetchedTopics(topics){
  return {
    type: "FETCHED_TOPICS",
    payload: topics
  }
}

export function fetchTopics(){
  const jwt = localStorage.getItem("jwtToken")
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/parent_topics`, {
      method: 'get',
      headers : {
        "Authorization": "Bearer " + jwt
      }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchedTopics(json))

    })
  }
}
