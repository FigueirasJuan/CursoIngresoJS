function Mostrar()
{

	var respuesta = true;
	var numero;
	var acumuladornegativo = 0;
	var acumuladorpositivo = 0;
	var contadornegativo = 0;
	var contadorpositivo = 0;
	var contadorceros = 0;
	var cantidadnumeropar = 0;
	var promediopositivo = 0;
	var promedionegativo = 0;
	var difpositivonegativo;

while(respuesta == true)
{
	numero = prompt("Ingrese un número");
	numero = parseInt(numero);
	respuesta = confirm("¿Seguir ingresando números?");
	
if(numero<0)
{
	acumuladornegativo = acumuladornegativo + numero;
	contadornegativo = contadornegativo + 1;
	promedionegativo = acumuladornegativo / contadornegativo;
}
else if(numero>0)
{
	acumuladorpositivo = acumuladorpositivo + numero;
	contadorpositivo = contadorpositivo + 1;
	promediopositivo = acumuladorpositivo / contadorpositivo;
}
else if(numero == 0)
{
	contadorceros = contadorceros + 1;
}

}

document.write("<h1>Suma Negativos = " + acumuladornegativo + " </h1>");
document.write("<h1>Suma Positivos = " + acumuladorpositivo + " </h1>");
document.write("<h1>Cantidad Positivos = " + contadorpositivo " </h1>");
document.write("<h1>Cantidad Negativos = " + contadornegativo + " </h1>");
document.write("<h1>Cantidad Ceros = " + contadorceros + " </h1>");
document.write("<h1>Cantidad Números Pares = " +  + " </h1>");
document.write("<h1>Promedios de Positivos = " + promediopositivo + " </h1>");
document.write("<h1>Promedios de Negativos = " + promedionegativo + " </h1>");
document.write("<h1>Diferencia entre positivos y negativos = " + (acumuladorpositivo + acumuladornegativo) + " </h1>");

}//FIN DE LA FUNCIÓN