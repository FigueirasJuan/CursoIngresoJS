function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = true;
	var numero;

while(respuesta == true)
{
	numero = prompt("Ingrese un número.");
	contador = contador+1;
	acumulador = acumulador + parseInt(numero);
	respuesta = confirm("¿Desea seguir ingresando números?")

}

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador/contador;

}
//FIN DE LA FUNCIÓN