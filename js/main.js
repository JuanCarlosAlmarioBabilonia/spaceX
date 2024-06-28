import { 
    load,
    paginationCapsules,
    paginationRockets,
    paginationCrew,
    paginationLaunches,
    paginationCores,
    paginationLandpads,
    paginationShips,
    paginationCompany
} from "./modulesComponents/pagination.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

let crew = document.querySelector("#crew")
crew.addEventListener("click", async(e)=>{
    await footerSelect(e, crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})

let launches = document.querySelector("#launches")
launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})

let cores = document.querySelector("#cores")
cores.addEventListener("click", async(e)=>{
    await footerSelect(e, cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})

let landpads = document.querySelector("#landpads")
landpads.addEventListener("click", async(e)=>{
    await footerSelect(e, landpads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLandpads())
})

let ship = document.querySelector("#ship")
ship.addEventListener("click", async(e)=>{
    await footerSelect(e, ship)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationShips())
})

let company = document.querySelector("#company")
company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCompany())
})

rocket.click();