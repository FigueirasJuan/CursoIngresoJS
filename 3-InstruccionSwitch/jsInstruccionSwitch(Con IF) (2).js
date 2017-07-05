function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;
//alert (mesDelAño);
if(mesDelAño == "Julio" || mesDelAño == "Agosto")
{
	alert("Abrigate que hace frío.");
}
else if(mesDelAño == "Septiembre" || mesDelAño == "Octubre" || meDelAños == "Noviembre" || mesDelAño == "Diciembre")
{
    alert("Ya pasamos el frío, ahora calor!!!.");
}    
else if(mesDelAño == "Enero" || mesDelAño == "Febrero" || mesDelAño == "Marzo" || mesDelAño == "Abril" || mesDelAño == "Mayo" || mesDelAño == "Junio" )
{
  alert("Falta para el invierno.");
}	

}//FIN DE LA FUNCIÓN