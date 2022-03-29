/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector("#ingresar").onclick = function (event) {
  const $cantIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );
  borrarIntegrantes();
  crearIntegrantes($cantIntegrantes);
  event.preventDefault();
};
function crearIntegrantes(cantIntegrantes) {
  for (let i = 0; i < cantIntegrantes; i++) {
    const $nuevoLabel = document.createElement("label");
    const $nuevoInput = document.createElement("input");
    const $nuevoNodo = document.querySelector("#inputs-edad");
    const $br = document.createElement("br");
    $nuevoNodo.appendChild($nuevoLabel);
    $nuevoNodo.appendChild($nuevoInput);
    $nuevoNodo.appendChild($br);
    $br.setAttribute("class", "integrante");
    $nuevoLabel.setAttribute("class", "integrante");
    $nuevoInput.setAttribute("class", "integrante");
    $nuevoInput.setAttribute("id", "integrante");
    $nuevoLabel.textContent = `Ingrese edad Integrante Nro.${i + 1}`;
  }
}
function borrarIntegrantes() {
  const $borrarIntegrantes = document.querySelectorAll(".integrante").length;
  if ($borrarIntegrantes > 0) {
    for (let i = 0; i < $borrarIntegrantes; i++) {
      $inputs = document.querySelector("#inputs-edad");
      $integrantes = document.querySelector(".integrante");
      $inputs.removeChild($integrantes);
    }
  }
}
document.querySelector("#limpiar").onclick = function (event) {
  const $integrantesABorrar = document.querySelectorAll(".integrante").length;
  const $textoAborrar = document.querySelectorAll(".texto-resultado").length;
  for (let i = 0; i < $integrantesABorrar; i++) {
    $inputs = document.querySelector("#inputs-edad");
    $integrantes = document.querySelector(".integrante");
    $inputs.removeChild($integrantes);
  }
  for (let i = 0; i <$textoAborrar;i++){
    $resultados = document.querySelector("#resultados");
    $textoLimpiar = document.querySelector(".texto-resultado");
    $resultados.removeChild($textoLimpiar);
  }
  event.preventDefault();
};
document.querySelector("#calcular").onclick = function (event) {
  calcularMayorEdad();
  calcularMenorEdad();
  calcularPromedioFamilia();
  textoResultado();
  event.preventDefault();
};
function calcularMayorEdad() {
  let $leerEdadesIntegrantes = document.querySelectorAll("#integrante");
  let mayorEdad = 0;
  for (i = 0; i < $leerEdadesIntegrantes.length; i++) {
    let edadIntegrante = Number($leerEdadesIntegrantes[i].value);
    if (mayorEdad < edadIntegrante) {
      mayorEdad = edadIntegrante;
    }
  }
  return mayorEdad;
}
function calcularMenorEdad() {
  const $leerEdadesIntegrantes = document.querySelectorAll("#integrante");
  let edadDeReferencia = Number($leerEdadesIntegrantes[0].value);
  let menorEdad = 0;
  for (i = 0; i < $leerEdadesIntegrantes.length; i++) {
    let edadIntegrante = Number($leerEdadesIntegrantes[i].value);
    if (edadDeReferencia <= edadIntegrante) {
      menorEdad = edadDeReferencia;
    } else {
      menorEdad = edadIntegrante && (edadDeReferencia = edadIntegrante);
    }
  }
  return menorEdad;
}
function calcularPromedioFamilia() {
  const $leerEdadesIntegrantes = document.querySelectorAll("#integrante");
  let promedio = 0;
  for (i = 0; i < $leerEdadesIntegrantes.length; i++) {
    promedio += Number($leerEdadesIntegrantes[i].value);
  }
  promedio = promedio / Number($leerEdadesIntegrantes.length);
  return promedio;
}
function textoResultado() {
  let $textoMayorEdad = document.querySelector("#resultado-mayor-edad");
  let $textoMenorEdad = document.querySelector("#resultado-menor-edad");
  let $textoPromedioEdad = document.querySelector("#resultado-promedio");
  $textoMayorEdad.textContent = `El mayor es: ${calcularMayorEdad()}`;
  $textoMenorEdad.textContent = `El menor es: ${calcularMenorEdad()}`;
  $textoPromedioEdad.textContent = `El promedio de edad es: ${calcularPromedioFamilia()}`;
}