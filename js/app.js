
//Constructores 
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
function UI() { }

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');
    for (i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        selectYear.appendChild(option);
    }
}

//Muestar alertas en pantall
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    if(tipo === 'error') {
        div.classList.add('error');
    }else{
        div.classList.add ('correcto');
    }
    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout( () => {
        div.remove();
    }, 3000)
}

//Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //Llena el select con los años...
})


addEventListener();
function addEventListener(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}
function cotizarSeguro(e) {
    e.preventDefault();
    //Leer la marca seleccionada 
    const marca = document.querySelector('#marca').value;
    //Leer el año seleccionado 
    const year = document.querySelector('#year').value;
    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
        return;
    }
    ui.mostrarMensaje('Cotizando...' ,'exito')
 
    //Instanciar el seguro

    //Utilizar el prototype que va a cotizar.
}
