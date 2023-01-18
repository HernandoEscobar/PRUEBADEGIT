/** 
 * esto desde boton onclick
document.getElementById('boton').onclick = function () {
    console.log("Estamos capturando evento click");
    document.getElementById("demo").innerHTML = "Estamos probando evento en JS"
}
*/

/**
 * esto desde addevenlistener de toda la ventana
document.addEventListener('click',function() {
    console.log("Hola Mundo desde Eventlistener");
    document.getElementById("demo").innerHTML = "Estamos probando evento en JS 2"
});
*/



// esto desde addevenlistener asignando listen al boton
document.getElementById("boton").addEventListener('click', function() {
    console.log("Hola Mundo desde Eventlistener");
    document.getElementById("demo").innerHTML = "Estamos probando evento en JS"
}); 

document.getElementById("boton_color").addEventListener('click', function() {  
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById("boton_default").addEventListener('click', function() {  
    document.body.style.backgroundColor = 'aqua';
});

document.getElementById("boton_ocultar").addEventListener('click', function() {  
    document.getElementById('demo').style.display = 'none'
});

const coleccion = document.getElementsByClassName('prueba');
for (let i = 0; i < coleccion.length; i++) {
    coleccion[i].style.backgroundColor = 'green';
}