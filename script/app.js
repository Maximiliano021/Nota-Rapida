let cita = document.getElementById("cita");
let textCita = document.getElementById("text-cita");
let btnCita = document.getElementById("btn-cita");
let citasCreadas = document.querySelector(".citasCreadas");
let color = document.getElementById('color');

eventListeners();

function eventListeners() {
  textCita.addEventListener("blur", (e) => (textCita = e.target.value));
  btnCita.addEventListener("click", (e) => {
    e.preventDefault();
    if (textCita.length > 0) {
      let nuevaCita = document.createElement("div");
      nuevaCita.innerHTML = `
              <div class="d-flex justify-content-end">
                  <button type="button" class="btn-close bg-danger" aria-label="Close"></button>            
              </div>
              <p>${textCita}</p>`;
      nuevaCita.classList.add("col-md-2", "textearea","cardNew" ,"col-5");
      citasCreadas.appendChild(nuevaCita);
      textCita = "";
      cita.reset();

      citasCreadas.addEventListener("click", (e) => {
        let elemento = e.target;
        if (elemento.classList.contains("btn-close"))
          e.target.parentElement.parentElement.remove();
      });
    }
  });
}