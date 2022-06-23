import { getData } from "../helpers/getData.js";
import { compra, odjetos } from "../modules/odjetos.js";
const inicio = document.getElementById("container")
const caja1 = document.getElementById("caja1")
const cont1 = document.querySelector(".container1")
const bt1 = document.getElementById("b1");
const bt2 = document.getElementById("b2");
const bt3 = document.getElementById("b3");
const bt4 = document.getElementById("b4");
const url = "http://localhost:4005/"


bt1.addEventListener("click", async() =>{
    try {
        const data =  await getData(url + "electronics");
        odjetos(data, caja1 ); 
        console.log();
        inicio.style.display = 'none'
    } catch (error) {
        
    }

})
bt2.addEventListener("click", async() =>{
    try {
        const data =  await getData(url + "art");
        odjetos(data, caja1 ); 
        console.log();
        inicio.style.display = 'none'
    } catch (error) {
        
    }

})
bt3.addEventListener("click", async() =>{
    try {
        const data =  await getData(url + "gardens");
        odjetos(data, caja1 ); 
        console.log();
        inicio.style.display = 'none'
    } catch (error) {
        
    }

})
bt4.addEventListener("click", async() =>{
    try {
        const data =  await getData(url + "clothing");
        odjetos(data, caja1 ); 
        console.log();
        inicio.style.display = 'none'
    } catch (error) {
        
    }

})
bt4.addEventListener("click", async() =>{
    inicio.style.display = 'block'
})
let com;
 
document.addEventListener("click", ({target})=> {
        console.log(target.classList.contains("imgcos"));
        if (target.classList.contains("imgcos")){
            //const info = com.find(p => p.id == target.id)
            
                
            
        }
 } )