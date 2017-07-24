/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
eleccionMaquina = Math.floor(Math.random()*3)+1;

function comenzar()
{
    switch(eleccionMaquina)
{
    case 1:
    eleccionMaquina = "Piedra";
    break;

    case 2:
    eleccionMaquina = "Papel";
    break;

    case 3:
    eleccionMaquina = "Tijera";
    break;

}


}//FIN DE LA FUNCIÓN
function piedra()
{
    alert("La maquina selecciono: " + eleccionMaquina);

	if(eleccionMaquina == "Piedra")
    {
        alert("Usted empató");
    }
    else if(eleccionMaquina == "Papel")
    {
        alert("Usted perdió");
    }
    else
    {
        alert("Usted ganó");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    alert("La maquina selecciono: " + eleccionMaquina);

	if(eleccionMaquina == "Papel")
    {
        alert("Usted empató");
    }
    else if(eleccionMaquina == "Tijera")
    {
        alert("Usted perdió");
    }
    else
    {
        alert("Usted ganó");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("La maquina selecciono: " + eleccionMaquina);

	if(eleccionMaquina == "Tijera")
    {
        alert("Usted empató");
    }
    else if(eleccionMaquina == "Piedra")
    {
        alert("Usted perdió");
    }
    else
    {
        alert("Usted ganó");
    }

}//FIN DE LA FUNCIÓN