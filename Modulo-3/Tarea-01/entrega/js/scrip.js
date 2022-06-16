
 
 (function(){
    
    const sliders = [...document.querySelectorAll(".slider_body")];
    const arrowSiguiente = document.querySelector("#next");
    const arrowAntes = document.querySelector('#before');
    let value;

    arrowSiguiente.addEventListener("click", () =>changePosition(1));
    arrowAntes.addEventListener("click", () =>changePosition(-1),);

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
})