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
//alert("hola");
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Hola ,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hola ,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}



//WATSON

// Example 1: sets up service wrapper, sends initial message, and 
// receives response.

var AssistantV1 = require('watson-developer-cloud/assistant/v1');

// Set up Assistant service wrapper.
var service = new AssistantV1({
  username: '3fc683ee-50bb-48ab-89bd-b1b7104c1564', // replace with service username
  password: '8GzFKXU7QBQ3', // replace with service password
  version: '2018-02-16'
});

var workspace_id = 'b368b782-a212-4385-8d15-5aab22543a19'; // replace with workspace ID

// Start conversation with empty message.
service.message({
  workspace_id: workspace_id
  }, processResponse);

// Process the service response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }
}


