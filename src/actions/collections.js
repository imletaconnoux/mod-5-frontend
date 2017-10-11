

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

// export function addVideo(video, collection){
//   return {
//
//   }
// }

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
