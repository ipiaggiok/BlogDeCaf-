// querySelector

const heading = document.querySelector(".header__texto h2") // devuelve 0 o 1 elemento
heading.classList.add('nueva-clase');
heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a"); // devuelve 0 o todos los elementos
console.log(enlaces);

// enlaces[0].textContent = 'Enlace a Google';
// enlaces[0].href = 'http://www.google.com';

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

heading2.classList.remove('nueva-clase'); // remueve una clase

//  Generar un nuevo enlace

// 1ro: Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);

// 2do: Agregar un href
nuevoEnlace.href = 'nuevo-enlace.html';

// 3ro: Agregar el texto 
nuevoEnlace.textContent = ('Nuevo Enlace');

// 4to: Agregar la class  
nuevoEnlace.classList.add('navegacion__enlace')

// 5to: agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Aplicar eventos al formulario

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     // validar un formulario



//     console.log('enviando formulario..')
// });


// eventos de los inputs y textareas

const datos = {
    nombre : '',
    email : '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// el evento del submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // validar el formulario

        const { nombre, email, mensaje} = datos;
        if( nombre === '' || email === '' || mensaje === '') {
            mostrarAlerta('Todos los campos son obligatorios.', true);

            return; // corta la ejecucion del codigo
        } else {
            mostrarAlerta('Formulario Enviando');
        };

    //Enviar el formulario

        console.log('Enviando Formulario')
})

function leerTexto(e){
    console.log(e.target.value);

    datos[e.target.id] = e.target.value

    // console.log(datos);
};

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
};
 