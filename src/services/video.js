export function searchYoutube(term) {
  
  return fetch(`https://www.googleapis.com/youtube/v3/search?&q=${term}&key=AIzaSyCB6Tj0pbJk3_X0rbht442Ar-T93EAF-M0&type=video&part=snippet,id&order=relevance&maxResults=50`)
  .then((res) => res.json())
}


// function init() {
//   gapi.client.setApiKey("AIzaSyBedG4Z9HntDIWKY4JLvRrNo_1HkKGqciQ")
//   gapi.client.load("youtube", function(){
//     //yt api is ready
//   })
// }
