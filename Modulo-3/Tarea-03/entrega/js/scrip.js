import { deletec, postd } from "../helpers/crud.js";
import { getData } from "../helpers/getData.js";
import { odjetos } from "../modules/odjetos.js";
const inicio = document.getElementById("container");
const cart = document.getElementById("carr")
const caja1 = document.getElementById("caja1")
const bcarrito = document.querySelector("#carr")
const bt1 = document.getElementById("b1");
const bt2 = document.getElementById("b2");
const bt3 = document.getElementById("b3");
const bt4 = document.querySelector(".estamo");
const url = "http://localhost:4005/"
const bag = document.getElementById("con2");


cart.addEventListener("click", async() =>{
    bag.style.display = 'block'
    inicio.style.display = 'none'     
    info1.style.display = 'none';
    caja1.style.display = 'none'

    })

bt4.addEventListener("click", async() =>{
    deletec("http://localhost:4005/carrito/")
    alert("sus productos en el carrito de compras fueron eliminados")
})
let  yolo;


bt1.addEventListener("click", async() =>{
    try {
        const yolo = "electronics"
        const data =  await getData(url + "electronics");
        odjetos(data, caja1 ); 
        console.log();
        inicio.style.display = 'none'
    } catch (error) {
        
    }

})
bt2.addEventListener("click", async() =>{
    try {
        const yolo = "art"
        const data =  await getData(url + "art");
        odjetos(data, caja1 ); 
        console.log();
        inicio.style.display = 'none'
    } catch (error) {
        
    }

})
bt3.addEventListener("click", async() =>{
    try {
        const yolo = "gardens"
        const data =  await getData(url + "gardens");
        odjetos(data, caja1 ); 
        console.log();
        inicio.style.display = 'none'
    } catch (error) {
        
    }

})


let inf;
const info1 = document.getElementById("container1")

 document.addEventListener("click", async({target})=> {
        console.log(target.classList.contains("carr"));
        
    if (target.classList.contains("imgcos")){
         const data =  await getData(url + "electronics" );
        inicio.style.display = 'none'     
        info1.style.display = 'block';
         caja1.style.display = 'none'
         const dato = data.find((p)=> p.id === target.id)
            const m = document.getElementById("img_pro")
            const t = document.getElementById("t1")
            const t2 = document.getElementById("t2")
            const di = document.querySelector(".yolo")
            m.src = dato.imgproduto
            t.textContent = dato.descripcion
            t2.textContent = dato.costo
            di.id = dato.id
            di.addEventListener("click", async() =>{
                postd(dato);
                alert("su producto fue añadido al carrito")
            })
       

        
        //dato.addEventListener("submit", e =>{ })     
                        
        console.log(dato);
                                            
        }
    if(target.classList.contains("carr"))   {
            bag.style.display = 'block'
            inicio.style.display = 'none'     
            info1.style.display = 'none';
            caja1.style.display = 'none'
        const data =  await getData(url + "carrito");  
         const dat = data.find((p)=> p.id === target.id)
          const m2 = document.getElementById("img-prota")
         const t21 = document.getElementById("t11")
         const t22 = document.getElementById("t21")
         const di2 = document.querySelector(".estamo")
         m2.src = dat.imgproduto
         t21.textContent = dat.descripcion
         t22.textContent = dat.costo
         di2.id = dat.id 
       
    }           
} )



