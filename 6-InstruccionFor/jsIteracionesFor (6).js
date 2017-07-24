function Mostrar()
{

var num = prompt("Ingrese su número");
num = parseInt(num)
var pares = 0;

for(i=1; i<=num; i++)
{
    if(i % 2 == 0)
{
    pares++;
    alert("Número: " + i)
}

}

alert(pares);

}//FIN DE LA FUNCIÓN