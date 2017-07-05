function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById("hora").value;
if(laHora == "7" || laHora == "8" || laHora == "9" || laHora == "10" || laHora == "11")
{
	alert("Es de mañana.");
}
else if(laHora == "12" || laHora == "13" || laHora == "14" || laHora == "15" || laHora == "16" || laHora == "17" || laHora == "18" || laHora == "19")
{
	alert("Es de tarde.");
}
else if(laHora == "20" || laHora == "21" || laHora == "22" || laHora == "23" || laHora == "24" || laHora == "0" || laHora == "1" || laHora == "2" || laHora == "3" || laHora == "4" || laHora == "5" || laHora == "6")
{
		alert("Es de noche.");
}
else
{
		alert("La hora no existe.");
}

}//FIN DE LA FUNCIÓN