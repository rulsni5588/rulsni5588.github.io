var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/testim1.jpg') {
      miImage.setAttribute('src','images/test2.jpg');
    } else {
      miImage.setAttribute('src', 'images/testim1.jpg');
    }
}


//document.querySelector('html').onclick = function() {
  //  alert('Ouch! Deja de pincharme!');
//}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
alert("hola");
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'ncilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}