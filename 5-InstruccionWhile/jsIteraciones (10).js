function Mostrar()
{
    /*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
        1-Suma de los negativos.
        2-Suma de los positivos.
        3-Cantidad de positivos.
        4-Cantidad de negativos.
        5-Cantidad de ceros.
 
        6-Cantidad de números pares.
        7-Promedio de positivos.
        8-Promedios de negativos.
        9-Diferencia entre positivos y negativos, (positvos-negativos).
     */

	var sumaneg = 0;
	var sumapos = 0;
	var cantpos = 0;
	var cantneg = 0;
	var cantcero = 0;
	var cantpar = 0;
	var promneg = 0;
	var prompos = 0;
	var difposneg;
	var respuesta = true;
	var numero;

while(respuesta == true)
{

	numero = prompt("Ingrese un número:");
	numero = parseInt(numero);
	
	while(isNaN(numero))
    {
        numero = prompt("Vuelva a ingresar un número");
        numero = parseInt(numero);
    }

	if(numero>0)
	{
		sumapos = sumapos + numero;
		cantpos++;
	}

	else if(numero<0)
	{
		sumaneg = sumaneg + numero;
		cantneg++;	
	}

	else if(numero == 0)
	{
		cantcero++;
	}

	if(numero % 2 == 0)
	{
		cantpar++;
	}

	if(difposneg < 0)
	{
		difposneg = difposneg * -1;
	}

	else if(cantneg != 0)
	{
		promneg = sumaneg / cantneg;
	}

	else if(cantpos != 0)
	{
		prompos = sumapos / cantpos;
	}

	respuesta = confirm("¿Desea seguir ingresando números?");
	difposneg = sumapos + sumaneg;
}


document.write("<h1>Suma de los negativos: </h1>" + sumaneg);
document.write("<h1>Suma de los positivos: </h1>" + sumapos);
document.write("<h1>Cantidad de positivos: </h1>" + cantpos);
document.write("<h1>Cantidad de negativos: </h1>" + cantneg);
document.write("<h1>Cantidad de ceros: </h1>" + cantcero);
document.write("<h1>Cantidad de pares: </h1>" + cantpar);
document.write("<h1>Promedio de positivos: </h1>" + prompos);
document.write("<h1>Promedio de negativos: </h1>" + promneg);
document.write("<h1>Diferencia entre positivos y negativos: </h1>" + difposneg);
}//FIN DE LA FUNCIÓN