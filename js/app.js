// check if we can use service worker
// if('serviceWorker' in navigator){
//     console.log('We can use Service Worker!!!');
// };
if(navigator.serviceWorker){
     console.log('We can use SW!!!');
     navigator.serviceWorker.register('/sw.js');
};