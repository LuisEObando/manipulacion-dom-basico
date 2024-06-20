const h1 = document.querySelector('h1') //hacemos referencia a la h1
const p = document.querySelector('p') //hacemos referencia a las etiquetas p
const parrafito = document.querySelector('.parrafito') //hacemos referencia a la clase
const idp = document.querySelector('#idp') //hacemos referencia al id
const input = document.querySelector('input')

console.log({
    h1,
    p,
    parrafito,
    idp,
    input
})

h1.innerHTML="Lo que sea..."
h1.classList.add('rojo'); //añade una clase a un elemento

input.value="Nuevo texto en input desde js." 

const img = document.createElement('img');
img.setAttribute('src','https://www.mundodeportivo.com/alfabeta/hero/2023/11/nueva-transformacion-de-goku-creada-por-un-fan-dragon-ball.jpg?width=768&aspect_ratio=16:9&format=nowebp');

idp.append(img)