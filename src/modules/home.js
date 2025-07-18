import { router } from './router.js';

export function home() {
    content.innerHTML = `
        <header class ="flex justify-between items-center p-3">
            <div>
                <a href"./home.html"><h1 class="text-3xl font-bold cursor-pointer">Page for find employment</h1></a>
            </div>
            <nav>
                <ul class="flex">
                    <li class="p-1 px-2 border-2 rounded-xl m-2 hover:scale-105 transition-transform">Opcion1</li>
                </ul>
            </nav>
        </header>

        <section class="flex justify-center w-full">
            <main class="p-10">
                <div>
                    <p class="text-center text-2xl font-bold">Information</p>  
                </div>
                <div id="login">
                    <button data-link="#/loginEmploye" class="p-1 px-2 border-2 rounded-xl m-2 hover:scale-105 transition-transform" id="employe">I'm find employment</button>
                    <button data-link="#/loginCompany" class="p-1 px-2 border-2 rounded-xl m-2 hover:scale-105 transition-transform" id="company">I'm company</button>
                </div>
            </main>
        </section>
    `;
    title.textContent = 'Home'
    location.href = '#/home'
    const login = document.getElementById("login");

    login.addEventListener("click", (e) => {
        router[e.target.dataset.link]()
    })
}