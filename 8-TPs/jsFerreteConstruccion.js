/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

    var largo;
    var ancho;
    var radio;
    var resultado;

function Rectangulo () 
{

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    resultado = (parseInt(largo)+parseInt(ancho))*6; // L + L * 2 * 3

    alert("Resultado: " + resultado);

}

function Circulo () 
{
	
    radio = document.getElementById("Radio").value;

    resultado = (parseInt(radio) * parseInt(radio) * Math.PI)*3;

    alert("Resultado: " + resultado);


}

function Materiales () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

// Saco el area de ambos y los multiplico por la cantidad

    var bolsasCal = (largo)*(ancho)*3;
    var bolsasCemento = (largo)*(ancho)*2;

    alert("Se requieren " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " de cal.");


}