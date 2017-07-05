function Mostrar()
{

    var sexo = prompt("ingrese F ó M .");

while(!(sexo == "f" || sexo == "m"))

{
    sexo = prompt("ingrese F ó M .");
}

    document.getElementById("Sexo").value = sexo;
    alert("Su sexo es: " + sexo);

}//FIN DE LA FUNCIÓN