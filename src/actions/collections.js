

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
  const body = JSON.stringify({user_id: 1, name: name})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections`, {
      method: 'post',
      body: body,
      headers: {
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
  const body = JSON.stringify({id: collection.id})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections/${collection.id}`, {
      method: 'DELETE',
      body: body,
      headers: {
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
  const body = JSON.stringify({user_id: 1, name: name})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections`, {
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
      dispatch(createdCollection(json))
      dispatch(addVideo(video, json))
    })
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
  debugger
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


function fetchedCollections(collections){
  return {
    type: "FETCHED_COLLECTIONS",
    payload: collections
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

function updatedCollectionName(collection){
  return {
    type: "UPDATED_COLLECTION_NAME",
    payload: collection
  }
}
export function updateCollectionName(id, name){
  const body = JSON.stringify({id: id, name: name})
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/collections/${id}`, {
      method: 'PATCH',
      body: body,
      headers: {
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
