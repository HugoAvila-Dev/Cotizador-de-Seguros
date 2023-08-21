
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

//Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //Llena el select con los años...
})