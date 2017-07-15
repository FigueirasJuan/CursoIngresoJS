/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cant;
    var marca;
    var precio = 35;
    precio = parseInt(precio);
    var res;
    var iibb;

    marca = document.getElementById("Marca").value;
    cant = document.getElementById("Cantidad").value;

if(cant == 6)
{
    res = (precio * cant) * 0.50;
    res = parseInt(res)
}
else if(cant == 5 && marca == "ArgentinaLuz")
{
    res = (precio * cant) * 0.60;
}
else if(cant == 5)
{
    res = (precio * cant) * 0.70;  
}
else if(cant == 4 && marca == "ArgentinaLuz")
{
    res = (precio * cant) * 0.75
}
else if(cant == 4 && marca == "FelipeLamparas")
{
    res = (precio * cant) * 0.75
}
else if(cant == 4)
{
    res = (precio * cant) * 0.80
}
else if(cant == 3 && marca == "ArgentinaLuz")
{
    res = (precio * cant) * 0.85
}
else if(cant == 3 && marca == "FelipeLamparas")
{
    res = (precio * cant) * 0.90
}
else if(cant == 3)
{
    res = (precio * cant) * 0.95
}
else
{
    res = (precio * cant)
}
if(res>120)
{
    iibb = res * 0.10
    alert("Usted pago $ " + iibb + " de IIBB")
}

document.getElementById("precioDescuento").value = res;

}
