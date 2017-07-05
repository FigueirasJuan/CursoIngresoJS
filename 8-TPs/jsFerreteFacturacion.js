/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var precio1;
    var precio2;
    var precio3;

function Sumar () 
{
    var sumar;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    sumar = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
    alert("El resultado de la suma es: " + sumar);
}
function Promedio () 
{
    var promedio;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    promedio = (parseInt(precio1) + parseInt(precio2) + parseInt(precio3)) / 3;
    alert("El resultado del promedio es: " + promedio);	
}
function PrecioFinal () 
{
    var preciofinal;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    preciofinal = (parseInt(precio1) + parseInt(precio2) + parseInt(precio3)) * 1.21;
    alert("El resultado del precio final es: " + preciofinal);	
}