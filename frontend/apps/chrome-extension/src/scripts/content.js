const EXTENSION_OPENED = 'extension-opened';
const REQUEST_VIDEO_INFORMATION = 'request-video-information';
const FETCHED_VIDEO_INFORMATION = 'fetched-video-information';

// console.log('extension activated.')

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if(request.message === EXTENSION_OPENED) {
//     const title = document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText;
//     const currentTime = (document.getElementById("movie_player")).getCurrentTime();
//     console.log({title, currentTime});
//     chrome.runtime.sendMessage({
//       message:
//       title,
//       currentTime
//     })
//   } else if (request.message === REQUEST_VIDEO_INFORMATION) {
//     const title = document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText;
//     const currentTime = (document.getElementById("movie_player")).getCurrentTime();
//     console.log({title, currentTime});
//     sendResponse({message: 'RESPONSE_VIDEO_INFORMATION', title, currentTime})
//   }
// });
