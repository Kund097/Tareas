/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
document.querySelector("#agregar-familiar").onclick = function(event){
    agregarFamiliar();
    event.preventDefault();
}
document.querySelector("#quitar-familiar").onclick = function(event){
    const $cantidadFamiliares = document.querySelectorAll("#familiar");
    if ($cantidadFamiliares.length > 0){
        quitarFamiliar();
    }
    
    event.preventDefault();
}
document.querySelector("#calcular").onclick = function(event){
    const $validarInputs = document.querySelector("#familiar");
    if ($validarInputs === null ){
        avisoUsuario();
    }else{validarInput();}
    event.preventDefault();
}
function agregarFamiliar(){
    const $agregarInput = document.querySelector("#familiares");
    const $input = document.createElement("input");
    const $label = document.createElement("label");
    const $br = document.createElement("br");
    $agregarInput.appendChild($label);
    $agregarInput.appendChild($input);
    $agregarInput.appendChild($br);
    $br.setAttribute("class","br-familiar");
    $label.setAttribute("class","label-familiar");
    $input.setAttribute("class","input-familiar");
    $input.setAttribute("type","number");
    $label.setAttribute("id","familiar");
    $input.setAttribute("id","familiar");
    $br.setAttribute("id","familiar");
    $label.textContent = "Salario anual familiar : ";
}
function quitarFamiliar(){
    const $borrarFamiliar = document.querySelector("#familiares");
    const $borrarLabel = document.querySelector(".label-familiar");
    const $borrarInput = document.querySelector(".input-familiar");
    const $borrarBr = document.querySelector(".br-familiar");
    $borrarFamiliar.removeChild($borrarBr);
    $borrarFamiliar.removeChild($borrarLabel);
    $borrarFamiliar.removeChild($borrarInput);
}
function calcularMayorSalario(){
    const $cantidadSueldos = document.querySelectorAll(".input-familiar");
    let sueldoReferencia = $cantidadSueldos[0].value;
    let sueldoMayor;
    for (let i = 0; i < $cantidadSueldos.length; i++){
        let sueldoFamiliar = Number($cantidadSueldos[i].value);
        if (sueldoFamiliar > 0){
            if (sueldoReferencia > sueldoFamiliar){
                sueldoMayor = sueldoReferencia
            }else{
                sueldoReferencia = sueldoFamiliar && (sueldoMayor = sueldoFamiliar);
            }
        }
    }
    console.log(`El sueldo anual mayor es:${sueldoMayor}`);
    $textoMayorSueldo = document.querySelector("#sueldo-mayor");
    $textoMayorSueldo.textContent = (`El sueldo anual mayor es: ${sueldoMayor} $`);
}
function calcularMenorSalario(){
    const $cantidadSueldos = document.querySelectorAll(".input-familiar");
    let sueldoReferencia = $cantidadSueldos[0].value;
    let sueldoMenor;
    for (let i = 0; i <$cantidadSueldos.length; i++){
        let sueldoFamiliar = Number($cantidadSueldos[i].value);
        if (sueldoFamiliar > 0){
            if (sueldoReferencia < sueldoFamiliar){
                sueldoMenor = sueldoReferencia
            }else{
                sueldoMenor = sueldoFamiliar && (sueldoReferencia = sueldoFamiliar);
            }
        }
    }
    console.log(`El sueldo anual menor es: ${sueldoMenor}`);
    $textoMenorSueldo = document.querySelector("#sueldo-menor");
    $textoMenorSueldo.textContent = (`El sueldo anual menor es: ${sueldoMenor} $`);
}
function calcularPromedioAnual(){
    const $cantidadSueldos = document.querySelectorAll(".input-familiar");
    let promedioAnual = 0;
    let sueldosIngresados = 0;
    for (let i = 0; i < $cantidadSueldos.length; i++){
        promedioAnual += Number($cantidadSueldos[i].value);
        if (Number($cantidadSueldos[i].value) > 0){
            sueldosIngresados += 1;
        }

    }
    promedioAnual = promedioAnual / sueldosIngresados;
    console.log(`Promedio Anual es: ${promedioAnual.toFixed(2)}`);
    let $textoPromedio = document.querySelector("#promedio-anual");
    $textoPromedio.textContent = (`El promedio anual es: ${promedioAnual.toFixed(2)} $`);
}
function calcularPromedioMensualFamiliar(){
    const $cantidadSueldos = document.querySelectorAll(".input-familiar");
    let promedioMensual = 0;
    for (let i = 0; i < $cantidadSueldos.length; i++){
        promedioMensual += Number($cantidadSueldos[i].value);    
    }
    promedioMensual = promedioMensual / 12 ;
    console.log(`Promedio Mensual de la familia es: ${promedioMensual.toFixed(2)}`);
    let $textoPromedioMensual = document.querySelector("#promedio-mensual");
    $textoPromedioMensual.textContent = (`Promedio Mensual de la familia es: ${promedioMensual.toFixed(2)} $`);
}
function validarInput(){
    const $cantidadFamiliares = document.querySelectorAll("#familiar");
    if (Number($cantidadFamiliares[1].value) === 0 ){
        alert("Ingrese sueldo");
    }else{
        calcularMayorSalario();
        calcularMenorSalario();
        calcularPromedioAnual();
        calcularPromedioMensualFamiliar();
    }
}
function avisoUsuario(){
    alert("Ingrese familiares primero");
}