

export function createCollection(name){

  return{
    type: "SEARCHED_VIDEOS",
    payload: name
  }
}

function createVideo(video) {
  return {
    type: "CREATE_VIDEO",
    payload: video
  }
}



export function addVideo(video, collection){

  const body = JSON.stringify({title: video.snippet.title, youtube_id: video.id.videoId, thumbnail: video.snippet.thumbnails.high.url})
  return function(dispatch){
    console.log(body)

    fetch(`http://localhost:3000/api/v1/videos`, {
      method: 'post',
      body: body,
      headers: {
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      console.log(collection)
      dispatch(addToCollection(json, collection))
    })
  }
}

function addToCollection(video, collection){
  const body = JSON.stringify({video_id: video.id, collection_id: collection.id})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/video_collections`, {
      method: 'post',
      body: body,
      headers: {
       "Accept": "application/json",
       "Content-Type":"application/json"
     }
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
    })
  }
}

//function addedToCollection
function fetchedCollections(collections){
  return {
    type: "FETCHED_COLLECTIONS",
    payload: collections
  }
}

//call when you load a collection page
export function fetchCollectionVideos(collectionObjects){
  return function(dispatch){
    collectionObjects.forEach((collection) => {
      console.log(collection)
    })

  }
}

export function fetchCollections(){

  return function(dispatch){

    fetch(`http://localhost:3000/api/v1/collections`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchedCollections(json))
    })
  }
}
