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
const input = document.querySelector("#in1")
const input2 = document.querySelector("#in2")
const input3 = document.querySelector("#in3")
const bt1 = document.getElementById("b1")

  
   bt1.addEventListener("click", () => {
   
   const input5 = (input).value;
   const input11 = (input2).value;
   const input12 = (input3).value;
   const input15 = (input5 && input11 && input12) == ""
      console.log(input15);
      switch (input15) {
         case true:
            alert("rellene el fomulario");
            break;
         default:

         alert("sus datos fueron guardados correctamente");
           localStorage.setItem('comentario', input12);
           break;
   }
})


