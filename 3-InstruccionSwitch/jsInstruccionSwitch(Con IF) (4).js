function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;
//alert (mesDelAño);
if(mesDelAño == "Febrero")
{
	alert("Este mes tiene 28 o 29 días.");
}
else if(mesDelAño == "Abril" || mesDelAño == "Junio" || mesDelAño == "Septiembre" || mesDelAño == "Noviembre")
{
		alert("Este mes tiene 30 días.");
}
else
{
		alert("Este mes tiene 31 días.");
}

}//FIN DE LA FUNCIÓN