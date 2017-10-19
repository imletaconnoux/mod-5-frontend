function followingsReducer(state = { list: [], allCollections: [] } , action){

  switch (action.type) {

    case "FETCHED_FOLLOWINGS":
      return Object.assign({}, state, {list: action.payload})

    case "UNFOLLOWED":
      return Object.assign({}, state, {list: state.list.filter((collection) => collection.id !== action.payload.following_id)})

    case "FOLLOWED":
      return Object.assign({}, state, {list: [...state.list, action.payload: {} ]})


    case "FETCHED_ALL_COLLECTIONS":
      return Object.assign({}, state, {allCollections: action.payload})

    case "REMOVED_VIDEO_FROM_COLLECTION":
      return Object.assign({}, state,{
        allCollections: state.allCollections.map((collection) =>{
          if (collection.id === action.payload.collection_id){
            return Object.assign({}, collection, {videos: collection.videos.filter((video) => video.id !== action.payload.video_id)})
          }
          return collection
        })
      })

    case "UPDATED_VIDEO_COMMENT":
      return Object.assign({}, state, {
        allCollections: state.allCollections.map((collection) => {
          if (collection.id === action.collectionPayload) {
            return Object.assign({}, collection, {videos: collection.videos.map((video) => {
              if (video.id === action.videoPayload.id) {
                return Object.assign({}, video, {comment: action.videoPayload.comment})
              }
              return video
              })
          })
        }
        return collection
        })
      })

    default:
        return state
    }
}

export default followingsReducer
