function Mostrar()
{
//tomo la edad  
    var edad;
    var estadocivil;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    estadocivil = document.getElementById("estadoCivil").value;

    if(estadocivil == "Soltero" && edad>=18)	
    {
        alert("Es soltero y no es menor");
    }
	


}//FIN DE LA FUNCIÓN