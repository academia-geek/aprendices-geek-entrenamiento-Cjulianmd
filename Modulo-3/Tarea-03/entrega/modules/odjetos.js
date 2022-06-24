export const odjetos = (data , container) => {
    container.innerHTML = ""
    data.forEach((element) => {
        const {nombre,imgproduto,costo,id} = element
        container.innerHTML += '<a  href="#" <div id="cajas" class="cajas"><img id='+id+' src='+imgproduto+' class="imgcos buton" alt="hola"><div class="cajita"><h2 class="h1">'+costo+'</h2><h1 class="h2">'+nombre+'</h1></div></a>'
    })

}

    

/*export const compra = (data , container) => {container.innerHTML = ""
   
        const {nombre,imgproduto,costo,id} = element
        container.innerHTML += '<a href="#" <div id="cajas" class="cajas"><img id='+id+' src='+imgproduto+' class="imgcos buton" alt="hola"><div class="cajita"><h2 class="h</a>'
    ./pages/index.html}*/


