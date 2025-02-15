export const getAllCores = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getIdCores = async (idCores)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${idCores}`)
    let data = await res.json();
    return data;
}