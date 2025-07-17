import {router} from './modules/router.js';

//Principal variable to do innerHTML with all components
const content = document.getElementById("content")
const title = document.getElementById("title")

//For when the user change the view to do click in the arrow of the window
window.addEventListener('hashchange', () => {
  const path = window.location.hash;
  middleware(path)
})

//For when the user load the unique page for first time or load page manually
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.hash;
  if (path == "") {
    router['#/home']()
  } else {
    middleware(path)
  }
})


//Middleware
function middleware(path) {
  const position = window.location.hash

  if (position == "#/homeCompany" || position == '#/homeEmployee') {
    const data = JSON.parse(localStorage.getItem('session'))
    
    if (data.type == "apliccant")  {
      fetch(router.url + `/applicants?name=${data.user}`)

      .then(res => res.json())
      .then(data => {
        if (!data.lenght) {
          localStorage.removeItem("session");
          router["#/home"]();
        }
      })
    } else if (data.type == "company") {
      fetch(router.url + `/applicants?name=${data.name}`)

      .then(res => res.json())
      .then(data => {
        if(!data.lenght) {
          localStorage.removeItem('session');
          router['#/home']()
        }
      })
    }
  } else {
    router[path]()
  }
}


