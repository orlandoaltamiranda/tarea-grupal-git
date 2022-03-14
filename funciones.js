
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  let nombre = document.getElementById('nombre').value;
  if (nombre.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }

  let direccion = document.getElementById('direccion').value;
  if (direccion.length < 3) {
    alert('Por favor incluye una dirección más especifica');
    return;
  }

  let correo = document.getElementById('correo').value;
  if (!(/\S+@\S+\.\S+/.test(correo))) {
    alert("La dirección de email " + correo + " es incorrecta.");
    return;
  }

  let telefono = document.getElementById('numero').value;
  if (!(/^([0-9]+){9}/.test(telefono))) {
    alert("Debes ingresar un teléfono de nueve números, para continuar.");
    return;
  }

  let clave = document.getElementById('comentario').value;
  if (clave.length < 10) {
    alert('Tu comentario no es lo suficientemente especifico');
    return;
  }
  this.submit();
}