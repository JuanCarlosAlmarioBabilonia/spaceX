export const getAllCapsules = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules")
    let data = await res.json();
    return data;
}
console.log(await getAllCapsules())

export const getAllCompany = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json();
    return data;
}
console.log(await getAllCompany())

export const getAllCores = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/cores")
    let data = await res.json();
    return data;
}
console.log(await getAllCores())

export const getAllCrew = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/crew")
    let data = await res.json();
    return data;
}
console.log(await getAllCrew())

export const getAllDragons = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/crew")
    let data = await res.json();
    return data;
}
console.log(await getAllCrew())