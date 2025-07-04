
// opcion 1 para mostrar numeros en pantalla. Necesita onclick en c7u de los btn
// function mostrarNumero(numero) {
//     const pantalla = document.getElementById('resultado');
//     pantalla.innerText += numero;
// }

//inicializadas para evitar undefined
let primerNumero = '';
let operador = '';
let esperarSegundoNumero = false;


// opcion 2 para mostrar numeros en pantalla
document.querySelectorAll('.nro').forEach(boton =>{
    boton.addEventListener('click', () => {
        const pantalla = document.getElementById('resultado');
        const valor = boton.innerText;

        if(valor === "." && pantalla.innerText.includes(".")){
            return;
        }
        if(esperarSegundoNumero){
            pantalla.innerText = '';
            esperarSegundoNumero = false;
        }
        pantalla.innerText += valor;

    });
});

function borrarNumero() {
    const pantalla = document.getElementById('resultado');
    pantalla.innerText = '';
}


document.querySelectorAll('.signos').forEach(boton =>{
    boton.addEventListener('click', () => {
        const pantalla = document.getElementById('resultado');
        
        primerNumero = pantalla.innerText;
        operador = boton.innerText;
        esperarSegundoNumero = true;

    });
});


const igual = document.getElementById('igual');
igual.addEventListener('click', () => {
    const pantalla = document.getElementById('resultado');
    const segundoNumero = pantalla.innerText;
    let respuesta = '';

    switch (operador) {
        case '+':
            respuesta = parseFloat(primerNumero) + parseFloat(segundoNumero);
            pantalla.innerText = respuesta;
            break;
        case '-':
            respuesta = parseFloat(primerNumero) - parseFloat(segundoNumero);
            pantalla.innerText = respuesta;
            break;
        case '*':
            respuesta = parseFloat(primerNumero) * parseFloat(segundoNumero);
            pantalla.innerText = respuesta;
            break;
        case '/':
            if (parseFloat(segundoNumero) === 0){
                respuesta = "Error";
            } else {
                respuesta = parseFloat(primerNumero) / parseFloat(segundoNumero);
            }
            pantalla.innerText = respuesta;
            break;
        default:
            respuesta = "Error";
            pantalla.innerText = respuesta;
            break;
    }
})
