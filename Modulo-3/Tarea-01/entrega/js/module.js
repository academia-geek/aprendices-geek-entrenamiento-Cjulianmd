import {personajes} from './personajes.js'


export function persona( module , container)  {
    container.innerHTML = ""
    module.forEach((element) => {
        const {imgpersonajes,personajes,funcion,id,Abrir,cerrar} = element
        container.innerHTML += '<img src="img/flechad.svg" class="slider_arrow" id="next"><img src="img/flachai.svg" class="slider_arrow" id="before"><section  data-id='+id+' class ='+ cerrar +'><figure class="slider_picture"> <img class="tama" src= '+imgpersonajes+' id="slider_img"> <a href='+ funcion +' class="boton_info">'+personajes+'</a> </figure></section>'
    })
 }

 
