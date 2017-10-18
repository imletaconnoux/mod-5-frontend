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
  console.log(term)
  console.log(sort)
  debugger
  return function(dispatch) {

    dispatch(searchingVideos())
    fetch(`https://www.googleapis.com/youtube/v3/search?&q=${term}&key=AIzaSyCB6Tj0pbJk3_X0rbht442Ar-T93EAF-M0&type=video&part=snippet,id&order=${sort}&maxResults=20`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(searchedVideos(json.items))
    })
  }
}
