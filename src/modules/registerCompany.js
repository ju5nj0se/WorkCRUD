import { router } from './router.js';

export function registerCompany() {
  content.innerHTML = `
    <section class="w-screen h-screen bg-gray-100 flex justify-center items-center">
    <main class="rounded-2xl p-10 bg-white flex flex-col content-around">
        <h3 class="text-center text-2xl">Register companies</h3>
        <form id="formRegisterCompany" class="content-around m-3">
            <div class="flex flex-col m-2">
                <label for="name">Name Company</label>
                <input id="text" type="name" name="name" placeholder="Name company" class="border-b-1 p-1 focus:outline-none" required>
            </div>
            <div class="flex flex-col m-2">
                <label for="email">Email company</label>
                <input id="email" type="email" name="email" placeholder="company@gmail.com" class="border-b-1 p-1 focus:outline-none" required>
            </div>
            <div class="flex flex-col m-2">
                <label for="logo">Logo company</label>
                <input type="text" name="logo" placeholder="https://logo" class="border-b-1 p-1 focus:outline-none" required>
            </div>
            <div class="flex flex-col m-2">
                <label for="category">Sector of the company</label>
                <select name="category" id="category" class="focus:outline-none rounded-lg w-20">
                    <option value="" selected>Select...</option>
                    <option value="textil">Textil</option>
                    <option value="technology">Technology</option>
                    <option value="food">Food</option>
                    <option value="services">Services</option>
                </select>
            </div>
            <div class="flex flex-col m-2">
                <label for="name">Description of the company</label>
                <textarea name="description" id="description" class="border-b-1 p-1 focus:outline-none" placeholder="Description of the company"></textarea>
            </div>
            <div class="flex justify-center pt-4">
                <button type="submit" id="submit" class="p-1 px-3 w-20 rounded-lg border-1 hover:scale-101 transition-transform">Register</button>
            </div>
            <p id="msg"></p>
            <p>You have account? <a data-link="#/loginCompany" id="login" class="hover:underline cursor-pointer">Login here</a></p>
        </form>
    </main>
    </section>
    `;
    const formRegisterCompany = document.getElementById('formRegisterCompany');
    const login = document.getElementById("login")
    title.textContent ="Register Company"
    location.hash = '#/registerCompany';

    login.addEventListener('click', () => {
      const link = login.dataset.link;
      router[link]();
    });

    //Register
    formRegisterCompany.addEventListener("submit", async e => {
        let data = new FormData(formRegisterCompany)
        data = Object.fromEntries(data.entries())

        const res = await fetch(router.url + `/companies`)
        const parse = await res.json()

        if (parse.lenght) {
            
        }
    })
}
