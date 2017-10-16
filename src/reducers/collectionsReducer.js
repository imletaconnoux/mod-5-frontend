function collectionsReducer(state = { list: [] }, action){
  switch (action.type) {
    case "FETCHED_COLLECTIONS":
      return Object.assign({}, state, {list: action.payload})

    case "CREATED_COLLECTION":
      return Object.assign({}, state, {list: [...state.list, action.payload: {} ]})

    case "DELETED_COLLECTION":
      return Object.assign({}, state, {list: state.list.filter((collection) => collection.id !== action.payload.id)})

    case "UPDATED_COLLECTION_NAME":
      return Object.assign({}, state, {
        list: state.list.map((collection) => {
          if (collection.id === action.payload.id) {
            return Object.assign({}, collection, {name: action.payload.name})
          }
          return collection
        })
      })

    case "REMOVED_VIDEO_FROM_COLLECTION":
      return Object.assign({}, state,{
        list: state.list.map((collection) =>{
          if (collection.id === action.payload.collection_id){
            return Object.assign({}, collection, {videos: collection.videos.filter((video) => video.id !== action.payload.video_id)})
          }
          return collection
        })
      })

    case "UPDATED_VIDEO_COMMENT":
      return Object.assign({}, state, {
        list: state.list.map((collection) => {

          if (collection.id === action.collectionPayload) {
            collection.videos.map((video) => {
              if (video.id === action.videoPayload.id) {
                return Object.assign({}, video, {comment: action.videoPayload.comment})
              }
              return video
            })
          }
          return collection
        })
      })

    default:
      return state
  }
}

export default collectionsReducer
