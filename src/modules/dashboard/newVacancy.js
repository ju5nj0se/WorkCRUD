import { router } from "../router.js";


export function newVacancy() {
  content.innerHTML = `
          <div class="container mx-auto p-6 max-w-xl bg-white shadow-lg rounded-lg">
    <form id="formNewVacancy" class="space-y-5">

      <div>
        <label for="vacancyTitle" class="block text-sm font-medium text-gray-700">Título de vacante</label>
        <input type="text" id="vacancyTitle"
          class="inputForEach mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label for="vacancyDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
        <input type="text" id="vacancyDescription"
          class="inputForEach mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div id="vacancyRequirementsContainer">
        <label for="vacancyRequirements" class="block text-sm font-medium text-gray-700">Requisitos</label>
        <div class="flex gap-2 mt-1">
          <input type="text" id="vacancyRequirements"
            class="inputForEach flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="button" id="addRequirement" class="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Agregar requisito</button>
        </div>
        <div id="alert">
        </div>
      </div>

      <div>
        <label for="vacancySalary" class="block text-sm font-medium text-gray-700">Salario</label>
        <input type="number" id="vacancySalary"
          class="inputForEach mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label for="modeJob" class="block text-sm font-medium text-gray-700">Modalidad</label>
        <select id="modeJob" name="modeJob"
          class="inputForEach mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="inPerson">Presencial</option>
          <option value="hybrid">Híbrido</option>
          <option value="remote">Remoto</option>
        </select>
      </div>

      <div class="text-right">
        <button type="button" id="sendVacant"
          class="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">Guardar nueva
          vacante</button>
      </div>

    </form>
  </div>
    `


  let vacancyTitle = document.getElementById("vacancyTitle")
  let vacancyDescription = document.getElementById("vacancyDescription")
  let sendVacant = document.getElementById("sendVacant")
  //add requirements 
  let vacancyRequirementsContainer = document.getElementById("vacancyRequirementsContainer")
  let vacancyRequirements = document.getElementById("vacancyRequirements")
  let addRequirement = document.getElementById("addRequirement")
  let vacancySalary = document.getElementById("vacancySalary")
  let modeJob = document.getElementById("modeJob")
  let requirementList = []
  let alert = document.getElementById("alert")


  //When the user wants to enter vacancy requirements, the button appears

  addRequirement.addEventListener("click", () => {
    let requirement = vacancyRequirements.value
    requirementList.push(requirement)
    alert.style = "color: green"
    alert.innerHTML = `El requisito se agrego correctamente`
  })

  sendVacant.addEventListener("click", () => {

    if ((!vacancyTitle.value || !vacancyDescription.value || !vacancyRequirements.value || !vacancySalary.value) || (vacancyTitle.value.trim() == "" || vacancyDescription.value.trim() == "" || vacancyRequirements.value.trim() == "")) {
      Swal.fire({
        title: "Todos los campos deben estar llenos",
        icon: "error"
      })
    } else {
      let vacancy = {
        //Nombre de la empresa que esta logeada y crea la nueva vacante
        "title": vacancyTitle.value,
        "description": vacancyDescription.value,
        "requirements": requirementList,
        "salary": vacancySalary.value,
        "mode": modeJob.value
      }
      Swal.fire({
        title: "Vacante creada correctamente",
        icon: "success",
        draggable: true
      }).then((result) => {
        if (result.isConfirmed) {
          sendNewVacany(vacancy)
        }
      });
    }

  })
}


//Create new vacancy
async function sendNewVacany(vacancy) {
  try {
    const res = fetch(router.url + "/vacancies", {
      cache:"no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vacancy)

    })
    if (res.ok) {
      console.log("HOLA")
    }
  } catch (error) {
    console.error("ERROR", error)
  }
}