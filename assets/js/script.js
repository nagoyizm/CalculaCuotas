//crear funcion para calcular el valor de cuotas a pagar
const calcularCuotas =(monto,interes,cuotas)=>{
    return (monto * interes) / cuotas;
}

//crear funcion que calcula el valor del interes
const calcularInteres = (monto, interes)=>{
    return (monto * interes) / 100;
}

//formatear el monto de las cuotas para incluir puntos en lugar de los miles

const formatearCuota = (numero) => {
    const numeroEntero = Math.trunc(numero);
    return `$${numeroEntero.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`;
}

document.getElementById("envio").addEventListener('click',()=>{
    let monto = document.getElementById("inputPago").value;
    let interes = document.getElementById("inputInteres").value;
    let cuotas = document.getElementById("inputCuotas").value;

    let cuota = calcularCuotas(monto, interes, cuotas);
    document.getElementById("resultado").innerHTML=(`
    <p>¡No te preocupes! puedes pagarlo en ${cuotas} cuotas de ${formatearCuota(cuota)}</p> 
    `)






})