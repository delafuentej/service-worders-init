//sw.js=>  only events and/or actions happening on the web site or in the application


self.addEventListener('fetch', event =>{

    const res = fetch(event.request)
                .then( res =>  res.ok ? res : fetch('img/main.jpg'))
                    // if(res.ok){
                    //     return res;
                    // }else{
                    //     return fetch('img/main.jpg');
                    // };   
                    
        event.respondWith(res);



})


//intercept and modify requests
// self.addEventListener('fetch', event =>{

//     if(event.request.url.includes('.jpg')){
//          let  imgRequest = fetch('img/main-dumped.jpg');
//          event.respondWith(imgRequest);
//     }
        
// })






//modify fetch request response
// self.addEventListener('fetch', event =>{

//     if(event.request.url.includes('style.css')){
//         //overwrite the css/style.css file
//         let res = new Response(`
//             body{
//                 background-color: gray !important;
//                 color: cyan;
//             }
        
//         `, {
//             //headers modification
//             headers: {
//                 'Content-Type': 'text/css'
//             }
//         });

//         event.respondWith(res);
//     }
// })




// self.addEventListener('fetch', event => {
//     //console.log(event);
//     if(event.request.url.includes('style.css')){
//         //simulating 404 Error - blocking the style request
//         event.respondWith(null);
//     }else{
//         event.respondWith( fetch( event.request))
//     }
  
// });
// self.addEventListener('fetch', event=> {
//     if(event.request.url.includes('.jpg')){
//         console.log(event.request.url);

//        // let  imgRequest = fetch('img/main.jpg')
//         //let  imgRequest = fetch(event.request.url)
//         let  imgRequest = fetch(event.request)
//         //event.respondWith(null);
//        event.respondWith(imgRequest);
//     }
// })

