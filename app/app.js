let citas = document.getElementById('citas');
let cita = document.getElementById('cita');

let textCita = document.getElementById('text-cita');
let btnCita = document.getElementById('btn-cita');

let totalcitas = document.getElementById('container-citas')

eventListeners();

function eventListeners(){
    textCita.addEventListener('blur', (e)=> textCita=e.target.value)
    btnCita.addEventListener('click', (e)=>{
        e.preventDefault();
        let nuevaCita = document.createElement('div');
        nuevaCita.innerHTML=
            `<div class="form-group">
                    <p class="textearea card col-12">${textCita}
                    </p>
             </div>`;
        nuevaCita.classList.add('col-md-3');
        citas.appendChild(nuevaCita);
        textCita = '';
        cita.reset();
    });
}