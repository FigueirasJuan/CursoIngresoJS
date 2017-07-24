function Mostrar()
{

var flag = true;

for(numero=0;flag==true;numero++)
{
    flag = confirm("Contador:" + numero);
}
for(;flag == false;)
{
    break;
}

}//FIN DE LA FUNCIÓN