import { router } from "./router.js";

export function loginEmploye() {
    content.innerHTML = `
    <section class="w-screen h-screen bg-gray-100 flex justify-center items-center">
        <main class="rounded-2xl p-10 bg-white flex flex-col content-around">
            <h3 class="text-center text-2xl">Login employee</h3>
            <form id="formLoginEmploye" class="content-around m-3">
                <div class="flex flex-col m-2">
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="juan@gmail.com" class="border-b-1 p-1 focus:outline-none" required>
                </div>
                <div class="flex flex-col m-2">
                    <label for="pass">Password</label>
                    <input type="password" name="pass" placeholder="Password" class="border-b-1 p-1 focus:outline-none" required>
                </div>
                <div class="flex justify-center pt-4">
                    <button type="submit" id="submit" class="p-1 px-3 w-20 rounded-lg border-1 hover:scale-101 transition-transform">Login</button>
                </div>
                <p id="msg"></p>
                <p>You dont have account? <a data-link="#/registerEmploye" id="register" class="hover:underline cursor-pointer">Register here</a></p>
            </form>
        </main>
    </section>
    `;
    location.hash = '#/loginEmploye';
    title.textContent = "Login Employe"
    const register = document.getElementById('register');

    register.addEventListener('click', () => {
      const link = register.dataset.link;
      router[link]();
    });
}