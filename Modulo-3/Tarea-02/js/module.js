 import { destino_f} from '../data/destinos.js'
 import { destino_a} from '../data/destinos.js'
 import { destino_e} from '../data/destinos.js'
 import { destino_o} from '../data/destinos.js'
 import { destino_m} from '../data/destinos.js'

 export const africa1 = destino_f
 export const asia1 = destino_a
 export const europa1 = destino_e
 export const oceania1 = destino_o
 export const america1 = destino_m
 

 export function destinosf( module , container)  {
    container.innerHTML = ""
    module.forEach((element) => {
        const {imgciudad} = element
        const {pais} = element
        const {ciudad,boton} = element
        container.innerHTML += ' <div class=" boxv "> <img src='+ imgciudad +' class= "imagend"> <div class="caja"> <div class="cajap"> <h1>'+ pais + '-</h1> <h1>'+ ciudad + '</h1></div> <a href="../tarea-02/pages/vermas.html"><button class="buton" id="button"> ver mas</button></a></div> </div>'
    })
 }


 export function vermas( module , container)  {
    container.innerHTML = ""
    module.forEach((element) => {
        const {imgciudad,pais,descripcion,contiente,ciudad,id} = element
        container.innerHTML += '<div id='+id+'> <img class= "imgver" src='+imgciudad+' alt=""><div class="caja_de_texto2"><h1 class=" titulo-a ">'+pais+'</h1><div class="tecto-d">'+descripcion +'</div></div><img class="img-con"  src='+contiente+' ><form action="" class="formulario" id="form"><center><h2>agenda tu cita</h2><input type="text" name='+pais+' class="input-des" disabled><br><br><input type="text" name='+ciudad+' class="input-des" disabled><br><br>fecha de Salida<br><input class="input-des" type ="date"><br><br>fechade regreso <br><input class="input-des" type ="date"><br><br><textarea class="input-des" name="" id="3" cols="30" rows="10"></textarea><label for="comentarios"></label><button class="btn-envia">Enviar</button></center></form>'
    })
 }


