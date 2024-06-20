//Select in consts the elements by id in the html:
const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btncalcular = document.querySelector('#btnCalcular')
const presult = document.querySelector('#result')

form.addEventListener('submit', sumarInputs);


function sumarInputs(event){
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    presult.innerText = "Resultado: " + sumaInputs;
}

