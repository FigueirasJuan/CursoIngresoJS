function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	
	while(contador<5)
	{
		contador = contador + 1;
		numero = prompt("Ingrese un número.")
		acumulador = acumulador+parseInt(numero)

		//Opcional

				while(isNaN(numero))
			{
				alert("No es un número");
				numero = prompt("Ingrese un número válido");
			}
	}

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN