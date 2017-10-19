

export function createdCollection(collection){

  return{
    type: "CREATED_COLLECTION",
    payload: collection
  }
}

function createVideo(video) {
  return {
    type: "CREATE_VIDEO",
    payload: video
  }
}

export function createCollection(name){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({name: name})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections`, {
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
      dispatch(createdCollection(json))
      return json
    })
  }
}

function deletedCollection(collection){
  return{
    type: "DELETED_COLLECTION",
    payload: collection
  }
}
export function deleteCollection(collection){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({id: collection.id})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections/${collection.id}`, {
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
      dispatch(deletedCollection(json))
    })
  }
}

export function createCollectionWithVideo(name, video){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({name: name})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections`, {
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
      dispatch(createdCollection(json))
      if (video.snippet) {
      dispatch(addVideo(video, json))
    } else {
      dispatch(addToCollection(video, json))
    }
    })
  }
}

export function addVideo(video, collection){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({title: video.snippet.title, youtube_id: video.id.videoId, thumbnail: video.snippet.thumbnails.high.url})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/videos`, {
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
      dispatch(addToCollection(json, collection))
    })
  }
}

function addedToCollection(video, collection){
  return {
    type: "ADDED_TO_COLLECTION",
    videoPayload: video,
    collectionPayload: collection
  }
}

export function addToCollection(video, collection){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({video_id: video.id, collection_id: collection.id})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/video_collections`, {
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

      dispatch(addedToCollection(video, collection))
    })
  }
}


function fetchedCollections(collections){
  return {
    type: "FETCHED_COLLECTIONS",
    payload: collections
  }
}


export function fetchCollections(){
  const jwt = localStorage.getItem("jwtToken")
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/usercollections`, {
      method: 'get',
      headers : {
        "Authorization": "Bearer " + jwt
      }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchedCollections(json))
    })
  }
}

function updatedCollectionName(collection){
  return {
    type: "UPDATED_COLLECTION_NAME",
    payload: collection
  }
}
export function updateCollectionName(id, name){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({id: id, name: name})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections/${id}`, {
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

      dispatch(updatedCollectionName(json))
    })
  }
}

function removedVideoFromCollection(videoCollection){
  return {
    type: "REMOVED_VIDEO_FROM_COLLECTION",
    payload: videoCollection
  }
}

export function removeVideoFromCollection(collection, video){
  const jwt = localStorage.getItem("jwtToken")
  const body = JSON.stringify({collection_id: collection.id, video_id: video.id})

  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/video_collections/`, {
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
      dispatch(removedVideoFromCollection(json))
    })
  }
}

function updatedVideoComment(video, collection){
  return{
    type: "UPDATED_VIDEO_COMMENT",
    videoPayload: video,
    collectionPayload: collection
  }

}

export function updateVideoComment(id, comment, collection_id){
  const body = JSON.stringify({id: id, comment: comment})
  const jwt = localStorage.getItem("jwtToken")
  return function(dispatch){

    fetch(`http://localhost:3000/api/v1/videos/${id}`, {
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

      dispatch(updatedVideoComment(json, collection_id))
    })
  }
}
