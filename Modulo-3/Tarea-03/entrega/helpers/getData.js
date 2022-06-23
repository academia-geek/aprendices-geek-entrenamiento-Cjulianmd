



export const getData = async(url) => {
    try {
        const  resp = await fetch(url);
        const data =  await resp.json();
        return data
        
    }catch(err) {
        console.error(err);
        throw err;
    }
}