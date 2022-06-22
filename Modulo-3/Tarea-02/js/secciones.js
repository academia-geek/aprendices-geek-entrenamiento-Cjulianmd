import {destinosf} from "./module.js"
import {destino_a, destino_e, destino_f, destino_m, destino_o} from '../data/destinos.js'
//import {vermas} from "./module.js"

const boton = document.getElementById("buton");
const destinos = document.getElementById("destinoscon");
const caja20 = document.getElementById("ver")

const africa = document.getElementById("africa");
const asia = document.getElementById("asia");
const europa = document.getElementById("europa");
const oceania = document.getElementById("oceania");
const america = document.getElementById("america");

let vermas;

//vermas( destino_f, caja20 );
africa.addEventListener("click",function(event){
   vermas = destino_f
    destinosf( destino_f, destinos );
    
})
asia.addEventListener("click",function(event){
   vermas = destino_a
    destinosf( destino_a, destinos );
 })
 
 europa.addEventListener("click",function(event){
    destinosf( destino_e, destinos );
    vermas = destino_e
 })
 oceania.addEventListener("click",function(event){
   vermas = destino_o
    destinosf( destino_o, destinos );
 })
 america.addEventListener("click",function(event){
   vermas = destino_m
    destinosf( destino_m, destinos );
 })
const h7 = document.getElementById("f2")
 const h6 = document.getElementById("f1")


 document.addEventListener("click", ({target})=> {
   if (target.classList.contains("buton")){
    

       const info = vermas.find(p => p.id == target.id)
      
       h6.placeholder = info.pais
       
       h7.placeholder = info.ciudad
       const h2 = document.getElementById("tecto-d")
       const h1 = document.getElementById("titulo-a")
       h1.innerHTML = info.pais
       h2.innerHTML = info.descripcion
       const h3 = document.getElementById("imgver")
       h3.src = info.imgciudad
       const h4 = document.getElementById("img-con")
       h4.src = info.continente  
       let mos = document.querySelector(".caja2")
       mos.style.display = 'block'
   }
} )

const bt1 = document.getElementById("b1")

bt1.addEventListener("click", () => {
   alert("rellene el formilario")
   
    let comentario = document.querySelector("textarea[class='comentario']").value;
    
    if (h6 == null || h6.length == 0) {
      alert("rellene el formilario")
      h7 == ""
    } else
        if (h7 == null || h7.length == 0) {
         alert("rellene el formilario")
         h6= ""
        } else { 
            localStorage.set(h6, "fecha1")
            localStorage.set(h7, "fecha2")

            alert("datos enviados con exito")
         } 
})

