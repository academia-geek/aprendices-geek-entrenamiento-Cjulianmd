const url = "http://localhost:4005/carrito"


export const postd = async dato  => {
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
            
        });
    } catch (error) {
        console.log("mejor jodete por que no voy a funcionar")
    }
     
} 

export const deletec = async link => {
    try {
        await fetch(link , {
            method: "DELETE"
        })
        
    } catch (error) {
        alert("no pudieron ser eliminados")
    }


}