function Mostrar()
{

	var contador=0;
	var respuesta = true;
	var numero;
	var max;
	var min;

while(respuesta == true)
{
	numero = prompt("Ingrese su número");
	numero = parseInt(numero);
	respuesta = confirm("¿Desea seguir ingresando números?");
	contador = contador + 1;

	if(contador == 1)
{
	max = numero;
	min = numero;
}
	else if(numero>min)
{
	max = numero;
}
	else
{
	min = numero;
}

document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;

}

}//FIN DE LA FUNCIÓN