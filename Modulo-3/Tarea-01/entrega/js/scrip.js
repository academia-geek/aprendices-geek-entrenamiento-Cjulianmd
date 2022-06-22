import {persona} from '../js/module.js'
import { personajes } from './personajes.js';
import { cerrar1 } from './secciones.js';

export const pclass = document.getElementById("sec")



persona( personajes,pclass);

    
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
            disabled
        }
        sliders[currentElement-1].classList.toggle("slider_body--shadow");
        sliders[value-1].classList.toggle("slider_body--shadow");
    }
   // if ( time == 1 ) {cerrar1()}

    document.getElementById("G")
    
    
    
    .style.display="none";