export const getAllCapsules = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getIdCapsules = async (capsulesId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/capsules/${capsulesId}`);
    const data = await response.json();
    return data;
}
