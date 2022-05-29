let estudiante = 40;
let promedio;
let cbaja;
let c;
for (let i = 0; i < estudiante ;i++){
    
    c = prompt("ingrese la nota del estudiante " + i)

    numero = numero + c;
    if (i == 1){
        cbaja=c;
    }else if (cbaja>c){
        cbaja=c;
    }

}

promedio = numero/estudiante
document.write("el promedio de los estudiantes es: " + promedio );
document.write("la calificacion mas baja fue: " + cbaja);