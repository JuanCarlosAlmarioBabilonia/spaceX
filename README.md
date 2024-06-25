SPACE X

Dia 1: Realice busquedas simples como la obtencion de la mayoria de los datos de las carpetas especificas de la url, un ejemplo de estos es:

export const getAllCapsules = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules")
    let data = await res.json();
    return data;
}
console.log(await getAllCapsules())

Donde extraigo de la url los datos y los convierto en un archivo JSON para que pueda ser leido por la consola