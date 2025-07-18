export function registerEmploye() {
    content.innerHTML = `
    <section class="w-screen h-screen bg-gray-100 flex justify-center items-center">
        <main class="rounded-2xl p-10 bg-white flex flex-col content-around">
            <h3 class="text-center text-2xl">Register Employee</h3>
            <form id="formRegisterCompany" class="fcontent-around m-3">
                <div class="flex">
                    <div>
                        <div class="flex flex-col m-2">
                            <label for="name">Name Company</label>
                            <input id="text" type="name" name="name" placeholder="Name company" class="border-b-1 p-1 focus:outline-none" required>
                        </div>
                        <div class="flex flex-col m-2">
                            <label for="email">Email company</label>
                            <input id="email" type="email" name="email" placeholder="company@gmail.com" class="border-b-1 p-1 focus:outline-none" required>
                        </div>
                        <div class="flex flex-col m-2">
                            <label for="category">Sector of the company</label>
                            <select name="category" id="category" class="focus:outline-none rounded-lg w-20">
                                <option value="" selected class="hover:bg-amber-400">Select...</option>
                                <option value="textil">Textil</option>
                                <option value="technology">Technology</option>
                                <option value="food">Food</option>
                                <option value="services">Services</option>
                            </select>
                        </div>
                </div>
                    <div>
                        <div class="flex flex-col m-2">
                        <div>
                            <label for="logo">Logo company</label>
                            <input type="text" name="logo" placeholder="https://logo" class="border-1 p-1 mx-2 px-2 rounded-lg focus:outline-none" id="inputLogo" required>
                        </div>
                        <div>
                            <img id="logo" src="https://media.revistagq.com/photos/5d5d383031110c000879872d/16:9/w_1920,c_limit/logo-starbucks.jpg" alt="Logo Company" class="w-10 h-auto">
                        </div>
                        </div>
                        <div class="flex flex-col m-2">
                            <label for="name">Description of the company</label>
                            <textarea name="description" id="description" class="border-1 rounded-lg p-1 focus:outline-none" placeholder="Description of the company"></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center pt-4">
                        <button type="submit" id="submit" class="p-1 px-3 w-20 rounded-lg border-1 hover:scale-101 transition-transform">Register</button>
                    </div>
                    <p id="msg"></p>
                    <p class="text-center">You have account? <a data-link="#/loginCompany" id="login" class="hover:underline cursor-pointer">Login here</a></p>
                </div>
            </form>
        </main>
    </section>
    `;
    location.hash = '#/registerEmploye' ;
    title.textContent = "Register Employe";

    title.textContent = "Register Employee";
    const logo = document.getElementById("logo");
    const inputLogo = document.getElementById('inputLogo');
    inputLogo.value = "asdf"
}