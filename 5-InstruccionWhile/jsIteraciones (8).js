function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var respuesta = true;

while(respuesta == true)
{
	var numero = prompt("Ingrese un número.")
	numero = parseInt(numero)

	if(numero>=0)
{
	positivo = positivo + numero
}
	else
{
	negativo = negativo * numero
}
	respuesta = confirm("¿Desea seguir ingresando números?")
}


document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN