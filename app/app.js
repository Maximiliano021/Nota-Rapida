let citas = document.getElementById('citas');
let cita = document.getElementById('cita');

let textCita = document.getElementById('text-cita');
let btnCita = document.getElementById('btn-cita');
let btnClose;

let totalcitas = document.getElementById('container-citas')

eventListeners();

function eventListeners(){
    textCita.addEventListener('blur', (e)=> textCita=e.target.value)
    btnCita.addEventListener('click', (e)=>{
        e.preventDefault();
        let nuevaCita = document.createElement('div');
        nuevaCita.innerHTML=
            `<div class="textearea card col-12">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn-close" aria-label="Close"></button>            
                </div>
                <p>${textCita}</p>
             </div>`;
        nuevaCita.classList.add('col-md-3','mb-5');
        citas.appendChild(nuevaCita);
        textCita = '';
        cita.reset();
        btnClose = document.querySelector('.btn-close');
        btnClose.addEventListener('click', (e)=>{
            e.preventDefault();
            e.target.parentElement.parentElement.remove()
        });
    });
    
} 