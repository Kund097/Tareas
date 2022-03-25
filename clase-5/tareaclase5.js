//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */
let primerNombre = `Nombre: `;
let segundoNombre = `Segundo Nombre: `;
let apellidoUsuario = `Apellido/s: `;
let edad = `Edad: `;
let saludoUsuario = `Bienvenido `;
const BOTON_INGRESO = document.querySelector(`#ingresar`);
BOTON_INGRESO.onclick = function(){
    saludoUsuario += document.querySelector(`#primernombre`).value;
    primerNombre += document.querySelector(`#primernombre`).value;
    segundoNombre += document.querySelector(`#segundonombre`).value;
    apellidoUsuario += document.querySelector(`#apellido`).value;
    edad += document.querySelector(`#edadusuario`).value;
    document.querySelector(`#datosUsuario1`).innerText = primerNombre;
    document.querySelector(`#datosUsuario2`).innerText = segundoNombre;
    document.querySelector(`#datosUsuario3`).innerText = apellidoUsuario;
    document.querySelector(`#datosUsuario4`).innerText = edad;
    document.querySelector(`h1`).innerText = `${saludoUsuario}!`;
    
    return false;
}