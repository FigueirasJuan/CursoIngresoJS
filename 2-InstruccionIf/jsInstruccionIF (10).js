function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = Math.floor(Math.random() * (10 - 1)) + 1;

	if(random >= 9)	
	{
		alert("EXCELENTE " + random);
	}
	else if(random >= 4 )
	{
		alert("APROBÓ " + random);
	}
	else
	{
		alert("Vamos, para la próxima se puede. " + random);
	}

}//FIN DE LA FUNCIÓN