import {router} from './modules/router.js';



const content = document.getElementById("content")
//For when the user change the view to do click in the arrow of the window
window.addEventListener('hashchange', () => {
  const path = window.location.hash;
  router[path]()


});

//
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.hash;
  console.log(path);
  
})

// function middleware(path = '#/home') {
//   const data = localStorage.getItem("session")
//   if (data) {
//     if () {

//     }
//   } else {
//     router['#/home']()
//   }
  
// }  


const texto = '{nombre:"juan"}'
const parseo = JSON.parse(texto)

console.log(typeof parseo, parseo);


