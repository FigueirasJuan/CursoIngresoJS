function Mostrar()
{

	var numero;
	numero = prompt("Ingrese un número entre 0 y 9.");
	
	while (numero<0 || numero>9)
{
	numero = prompt("Ingrese un número entre 0 y 9.");	
}

	document.getElementById("Numero").value = name;

}//FIN DE LA FUNCIÓN