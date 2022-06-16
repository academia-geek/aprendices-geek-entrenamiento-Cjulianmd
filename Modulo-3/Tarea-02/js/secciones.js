import {destinosf} from "./module.js"
import {destino_a, destino_e, destino_f, destino_m, destino_o} from '../data/destinos.js'
import {vermas} from'./module.js'
const destinos = document.getElementById("destinoscon");
const caja20 = document.getElementById("ver");

const africa = document.getElementById("africa");
const asia = document.getElementById("asia");
const europa = document.getElementById("europa");
const oceania = document.getElementById("oceania");
const america = document.getElementById("america");



africa.addEventListener("click",function(event){
    destinosf( destino_f, destinos );
})
asia.addEventListener("click",function(event){
    destinosf( destino_a, destinos );
 })
 
 europa.addEventListener("click",function(event){
    destinosf( destino_e, destinos );
 })
 oceania.addEventListener("click",function(event){
    destinosf( destino_o, destinos );
 })
 america.addEventListener("click",function(event){
    destinosf( destino_m, destinos );
 })

 vermas( destino_f ,caja20)

 
