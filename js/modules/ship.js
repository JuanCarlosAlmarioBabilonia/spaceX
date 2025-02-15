export const getAllShips = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getIdShips = async (shipsId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/ships/${shipsId}`);
    const data = await response.json();
    return data;
}
