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
let colorDeFondo = document.querySelector("body");
colorDeFondo.style.backgroundColor = ("blue");
colorDeFondo.style.fontSize = ("50px");
const $ingreso = document.querySelector("#ingresar");
$ingreso.onclick = function(){
  let primerNombre = "Nombre: ";
  let segundoNombre = "Segundo Nombre: ";
  let apellidoUsuario = "Apellido/s: ";
  let edad = "Edad: ";
  let saludoUsuario = "Bienvenido ";
    saludoUsuario += document.querySelector("#primer-nombre").value;
    primerNombre += document.querySelector("#primer-nombre").value;
    segundoNombre += document.querySelector("#segundo-nombre").value;
    apellidoUsuario += document.querySelector("#apellido").value;
    edad += document.querySelector("#edad-usuario").value;
    document.querySelector(".texto-primer-nombre").textContent = primerNombre;
    document.querySelector(".texto-segundo-nombre").textContent = segundoNombre;
    document.querySelector(".texto-apellido").textContent = apellidoUsuario;
    document.querySelector(".texto-edad").textContent = edad;
    document.querySelector("h1").textContent = `${saludoUsuario}!`;
    return false;
}
