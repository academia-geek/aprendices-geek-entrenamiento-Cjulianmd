import {persona} from '../js/module.js'
import { personajes } from './personajes.js';

export const pclass = document.getElementById("sec")


persona( personajes,pclass);

(function(){
    
    const sliders = [...document.querySelectorAll(".slider_body")];
    const arrowSiguiente = document.querySelector("#next");
    const arrowAntes = document.querySelector('#before');
    
    let value;

    arrowSiguiente.addEventListener("click", () => changePosition(1));
    arrowAntes.addEventListener("click", () => changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider_body--shadow').
        dataset.id);
        
        value = currentElement;
        value+= change;

        console.log(sliders.length);
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : none;


        }
        sliders[currentElement-1].classList.toggle("slider_body--shadow");
        sliders[value-1].classList.toggle("slider_body--shadow");

    }
   
});

function Golem1() {
    document.getElementById("G").style.display="block";
}
function cerrar1() {
    document.getElementById("G").style.display="none";
}
function Golem2() {
document.getElementById("A").style.display="block";
}
function cerrar2() {
    document.getElementById("A").style.display="none";
}
function Golem3() {
document.getElementById("b").style.display="block";
}
function cerrar3() {
    document.getElementById("b").style.display="none";
}
function Golem4() {
document.getElementById("c").style.display="block";
}
function cerrar4() {
    document.getElementById("c").style.display="none";
}
function Golem5() {
document.getElementById("d").style.display="block";
}
function cerrar5() {
    document.getElementById("d").style.display="none";
}
function Golem6() {
document.getElementById("g").style.display="block";
}
function cerrar6() {
    document.getElementById("g").style.display="none";
}
function Golem7() {
document.getElementById("l").style.display="block";
}
function cerrar7() {
    document.getElementById("l").style.display="none";
}
function Golem8() {
document.getElementById("M").style.display="block";
}
function cerrar8() {
    document.getElementById("M").style.display="none";
}
function Golem9() {
document.getElementById("m").style.display="block";
}
function cerrar9() {
    document.getElementById("m").style.display="none";
}
function Golem10() {
document.getElementById("P").style.display="block";
}
function cerrar10() {
    document.getElementById("P").style.display="none";
}
function Golem11() {
document.getElementById("p").style.display="block";
}
function cerrar11() {
    document.getElementById("p").style.display="none";
}