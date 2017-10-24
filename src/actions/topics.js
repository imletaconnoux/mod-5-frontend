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

function searchedTopicVideos(videos){
  return{
    type: "SEARCHED_TOPIC_VIDEOS",
    payload: videos
  }
}

export function searchTopicVideos(topicId, sort){
  return function(dispatch) {
    fetch(`https://www.googleapis.com/youtube/v3/search?&topicId=${topicId}&key=AIzaSyCB6Tj0pbJk3_X0rbht442Ar-T93EAF-M0&type=video&part=snippet,id&order=${sort}&maxResults=20`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(searchedTopicVideos(json.items))
    })
  }
}

export function clearTopicVideos(){
  return {
    type: "CLEAR_TOPIC_VIDEOS"
  }
}

export function searchTopicVideosWithTerm(topicId, sort, term){
  return function(dispatch) {
    fetch(`https://www.googleapis.com/youtube/v3/search?&topicId=${topicId}&q=${term}&key=AIzaSyCB6Tj0pbJk3_X0rbht442Ar-T93EAF-M0&type=video&part=snippet,id&order=${sort}&maxResults=20`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(searchedTopicVideos(json.items))
    })
  }

}
