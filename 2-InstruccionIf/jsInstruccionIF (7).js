function Mostrar()
{
//tomo la edad  
    var edad;
    var estadocivil;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    estadocivil = document.getElementById("estadoCivil").value;

    if(estadocivil = "Casado" && edad<18)	
    {
        alert("Es muy pequeño para NO ser soltero");
    }
    else if(estadocivil = "Divorciado" && edad<18)
    {
        alert("Es muy pequeño para NO ser soltero");
    }
    else
    {

    }


}//FIN DE LA FUNCIÓN