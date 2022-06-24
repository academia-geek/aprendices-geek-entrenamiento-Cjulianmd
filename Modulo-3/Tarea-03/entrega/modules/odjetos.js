export const odjetos = (data , container) => {
    container.innerHTML = ""
    data.forEach((element) => {
        const {nombre,imgproduto,costo,id} = element
        container.innerHTML += '<a  href="#" <div id="cajas" class="cajas"><img id='+id+' src='+imgproduto+' class="imgcos buton" alt="hola"><div class="cajita"><h2 class="h1">'+costo+'</h2><h1 class="h2">'+nombre+'</h1></div></a>'
    })

}

export const compra = (data , container) => {container.innerHTML = ""
    container.innerHTML = '<div id="bots1"><button class="bm estamo" id="">eliminar todo de carrito</button> </div></div>'
    data.forEach((element) => {
        const {nombre,imgproduto,costo,id} = element
        container.innerHTML += '<div class="imgcarrito" id="imgpro"><img  src='+imgproduto+' id="img-prota" class="img_pro"><div class="tex"><h1 id="t11">'+nombre+'</h1> <h2 id="t21">'+costo+'</h2>'
    })

}


            
                
                    
                   
                
                    
               


  