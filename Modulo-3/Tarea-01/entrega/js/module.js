import {personajes} from './personajes.js'


export function persona( module , container)  {
    container.innerHTML = '<img src="img/flachai.svg" class="slider_arrow" id="next"><img src="img/flechad.svg" class="slider_arrow" id="before">'
    module.forEach((element) => {
        const {imgpersonajes,personajes,funcion,id,Abrir,cerrar} = element
        container.innerHTML += '<section  data-id='+id+' class ="slider_body '+ cerrar +'"><figure class="slider_picture"> <img class="tama" src= '+imgpersonajes+' id="slider_img"> <a href='+ funcion +' class="boton_info">'+personajes+'</a> </figure></section>'
    })
 }

 
