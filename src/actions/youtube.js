function searchingVideos(){
  return{
    type: "SEARCHING_VIDEOS"
  }
}

function searchedVideos(videos){
  return{
    type: "SEARCHED_VIDEOS",
    payload: videos
  }
}

export function searchVideos(term, sort){
  return function(dispatch) {

    dispatch(searchingVideos())
    fetch(`https://www.googleapis.com/youtube/v3/search?&q=${term}&key=AIzaSyCB6Tj0pbJk3_X0rbht442Ar-T93EAF-M0&type=video&part=snippet,id&order=${sort}&maxResults=20`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(searchedVideos(json.items))
    })
  }
}

function searchedCollections(collections){
  console.log(collections)
  debugger
  return {
    type: "SEARCHED_COLLECTIONS",
    payload: collections
  }
}

export function searchCollections(term){
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
      console.log(json)
      const collections = json.filter((collection) => collection.name.includes(term))
      dispatch(searchedCollections(collections))
    })
  }
}
