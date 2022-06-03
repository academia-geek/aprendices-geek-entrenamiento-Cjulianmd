let clave = prompt("porfavor dijite la clave del descuento")
let precio = prompt("dijite el precio")
document.write("libro IT");
document.write("precio" + precio);
if(clave == 01){
    descuento = precio * 0.10
    pd = precio - descuento 
    document.write("precio con descuento" + pd);
}else if(clave == 02){
    descuento = precio * 0.20
    pd = precio - descuento
    document.write("precio con descuento" + pd);
}



