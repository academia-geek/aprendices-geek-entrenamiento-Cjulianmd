let n = prompt("escribe si estas sentado o dormido")
let t = prompt("¿cuantos minutos estubiste en esa pocision?")
let calorías
    if (n == dormido){
        calorías = t * 1.08
    }
    if (n == sentado){
        calorías = t * 1.66
    }
document.write("las calorías que consumiste son " + calorías)