import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";

import { 
    nameRockets,
    nameCrew,
    nameLaunches,
    nameCapsules,
    nameCores,
    nameLandpads,
    nameShips,
    nameCompany,
    nameDragons,
    nameHistory,
    nameLaunchpads,
    namePayloads,
    nameRoadster,
    nameStarlink
} from "./title.js";

import{
    getAllStarlink,
    getIdStarlink
} from "../modules/starlink.js"

import{
    getRoadster
} from "../modules/roadster.js"

import{
    getAllPayloads,
    getIdPayloads
} from "../modules/payloads.js"

import{
    getAllLaunchpads,
    getIdLaunchpads
} from "../modules/launchpands.js"

import{
    getAllHistory,
    getIdHistory
} from "../modules/history.js"

import{
    getCompany
} from "../modules/company.js"

import{
    getAllShips,
    getIdShips
} from "../modules/ship.js"

import{
    getAllDragons,
    getIdDragons
} from "../modules/dragons.js"

import{
    getAllCores,
    getIdCores
} from "../modules/cores.js"

import{
    getAllLandpads,
    getIdLandpads
} from "../modules/landspands.js"


import {
    getAllCrew,
    getIdCrew
} from "../modules/crew.js"


import {
    getAllLaunches,
    getIdLaunches
} from "../modules/launches.js"


import{
    getAllCapsules,
    getIdCapsules
} from "../modules/capsules.js"


import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    capsulesIdPage,
    capsulestypePage,
    capsulesDescriptionPage,
    capsulesUpdatePage,
    crewIdPage,
    crewLaunchesPage,
    crewWikiPage,
    crewAgencyPage,
    crewStatusPage,
    launchesIdPage,
    launchesRocketPage,
    launchesPadPage,
    launchesStaticPage,
    launchesUtcPage,
    launchesLocalPage,
    launchesPrecisionPage,
    launchesWebcastPage,
    launchesArticlePage,
    launchesWikiPage,
    coresIdPage,
    coresLaunchesPage,
    coresSerialPage,
    coresStatusPage,
    landpadsIdPage,
    landpadsFullNamePage,
    landpadsStatusPage,
    landpadsTypePage,
    landpadsLocalityPage,
    landpadsRegionPage,
    landpadsWikiPage
} from "./information.js";


import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tables.js";

import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";

import { 
    imageRockets,
    imageCrew,
    imageLaunches
} from "./card.js";

import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";
///



export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
    `;
}
export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}

const getRocketsId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let Rocket = await getAllRocketsId(e.target.id);
    await clear();
    
    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)

    let sectionImage = document.querySelector("#section__information__1");

    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/gif/purple.webp"); 
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "270px"; 
    img3.style.left = "690px"; 
    img3.style.width = "300px"; 
    img3.style.height = "150px";
    img3.style.marginTop = "10px";
    img3.style.marginLeft = "300px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    let img4 = document.createElement("img");
    img4.setAttribute("src", "storage/img/gif/purple.webp"); 
    img4.classList.add("imagen-paginacion-roadster");
    img4.style.position = "absolute";
    img4.style.top = "195px"; 
    img4.style.left = "-210px"; 
    img4.style.width = "300px"; 
    img4.style.height = "150px";
    img4.style.marginTop = "85px";
    img4.style.marginLeft = "300px";
    img4.style.borderRadius = "10%";
    sectionImage.appendChild(img4);

    let img5 = document.createElement("img");
    img5.setAttribute("src", "storage/img/gif/co.webp");
    img5.classList.add("imagen-paginacion-roadster");
    img5.style.position = "absolute";
    img5.style.top = "300px"; 
    img5.style.left = "-235px"; 
    img5.style.width = "300px"; 
    img5.style.height = "200px";
    img5.style.marginTop = "-200px";
    img5.style.marginLeft = "757px";
    img5.style.borderRadius = "10%";
    sectionImage.appendChild(img5);
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a3.click();
    
    return div;
}

const getIdCap = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let capsules = await getIdCapsules(e.target.id);
    console.log(capsules);
  
    await nameCapsules(capsules.serial);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let capsulesIdPageElement = await capsulesIdPage(capsules.id);
    description__item.append(capsulesIdPageElement);

    let capsulesTypePageElement = await capsulestypePage(capsules.type);
    description__item.append(capsulesTypePageElement);


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let capsulesStatusPageElement = await capsulesDescriptionPage(capsules.status);
    information__2.append(capsulesStatusPageElement);

    let capsulesUpdatePageElement = await capsulesUpdatePage(capsules.last_update);
    information__2.append(capsulesUpdatePageElement);

    let sectionImage = document.querySelector("#section__information__1");

    let img2 = document.createElement("img");
    img2.setAttribute("src", "storage/img/gif/co.webp"); 
    img2.classList.add("imagen-paginacion-roadster");
    img2.style.position = "absolute";
    img2.style.top = "220px"; 
    img2.style.left = "150px"; 
    img2.style.width = "445px"; 
    img2.style.height = "350px";
    img2.style.marginTop = "10px";
    img2.style.marginLeft = "300px";
    img2.style.borderRadius = "10%";
    sectionImage.appendChild(img2);

    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/gif/purple.webp"); 
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "270px"; 
    img3.style.left = "675px"; 
    img3.style.width = "300px"; 
    img3.style.height = "150px";
    img3.style.marginTop = "10px";
    img3.style.marginLeft = "300px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    let img4 = document.createElement("img");
    img4.setAttribute("src", "storage/img/gif/purple.webp"); 
    img4.classList.add("imagen-paginacion-roadster");
    img4.style.position = "absolute";
    img4.style.top = "270px"; 
    img4.style.left = "-230px"; 
    img4.style.width = "300px"; 
    img4.style.height = "150px";
    img4.style.marginTop = "10px";
    img4.style.marginLeft = "300px";
    img4.style.borderRadius = "10%";
    sectionImage.appendChild(img4);


    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Capsule information";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Type";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${capsules.type}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Reuse count";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${capsules.reuse_count}`;
    div2.append(span2, strong2);
  
    divp.append(div1, div2);
    information__table__1.append(divp);
  
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Capsule landing information";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Water landings";
    let strong3= document.createElement("strong");
    strong3.textContent = `${capsules.water_landings}`;
    div3.append(span3, strong3);
  
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Land landings";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${capsules.land_landings}`;
    div4.append(span4, strong4);
  
    divs.append(div3, div4);
    information__table__2.append(divs)

};


  

export const paginationCapsules = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIdCap)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIdCap)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIdCap)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}



// INFORMACION CREW
const getAllIDCrew = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let crew = await getIdCrew(e.target.id);
    console.log(crew);

    await nameCrew(crew.name);
    await imageCrew([{ name: crew.name, image: crew.image }]);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let crewIdPageElement = await crewIdPage(crew.id);
    description__item.append(crewIdPageElement);

    let crewLaunchesPageElement = await crewLaunchesPage(crew.launches);
    description__item.append(crewLaunchesPageElement);

    let crewWikiPageElement = await crewWikiPage(crew.wikipedia);
    description__item.append(crewWikiPageElement);

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let crewAgencyPageElement = await crewAgencyPage(crew.agency);
    information__2.append(crewAgencyPageElement);

    let crewStatusPageElement = await crewStatusPage(crew.status);
    information__2.append(crewStatusPageElement);

    let sectionImage = document.querySelector("#section__information__1");

    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/gif/purple.webp"); 
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "270px"; 
    img3.style.left = "580px"; 
    img3.style.width = "300px"; 
    img3.style.height = "150px";
    img3.style.marginTop = "85px";
    img3.style.marginLeft = "300px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    let img4 = document.createElement("img");
    img4.setAttribute("src", "storage/img/gif/purple.webp");
    img4.classList.add("imagen-paginacion-roadster");
    img4.style.position = "absolute";
    img4.style.top = "270px"; 
    img4.style.left = "-125px"; 
    img4.style.width = "300px"; 
    img4.style.height = "150px";
    img4.style.marginTop = "85px";
    img4.style.marginLeft = "300px";
    img4.style.borderRadius = "10%";
    sectionImage.appendChild(img4);

    let img5 = document.createElement("img");
    img5.setAttribute("src", "storage/img/gif/co.webp");
    img5.classList.add("imagen-paginacion-roadster");
    img5.style.position = "absolute";
    img5.style.top = "270px"; 
    img5.style.left = "-230px"; 
    img5.style.width = "300px"; 
    img5.style.height = "150px";
    img5.style.marginTop = "-200px";
    img5.style.marginLeft = "757px";
    img5.style.borderRadius = "10%";
    sectionImage.appendChild(img5);
    
};

export const paginationCrew = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllIDCrew)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllIDCrew)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllIDCrew)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}



// Apartado de launches

const getIDLaunches = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let launches = await getIdLaunches(e.target.id);
    console.log(launches);
    await nameLaunches(launches.name);
    await imageLaunches([launches]);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let launchesIdPageElement = await launchesIdPage(launches.id);
    description__item.append(launchesIdPageElement);

    let launchesRocketPageElement = await launchesRocketPage(launches.rocket);
    description__item.append(launchesRocketPageElement);

    let launchesPadPageElement = await launchesPadPage(launches.launchpad);
    description__item.append(launchesPadPageElement);

    let launchesStaticPageElement = await launchesStaticPage(launches.static_fire_date_utc);
    description__item.append(launchesStaticPageElement);

    let launchesUtcPageElement = await launchesUtcPage(launches.date_utc);
    description__item.append(launchesUtcPageElement);

    let launchesLocalPageElement = await launchesLocalPage(launches.date_local);
    description__item.append(launchesLocalPageElement);

    let launchesPrecisionPageElement = await launchesPrecisionPage(launches.date_precision);
    description__item.append(launchesPrecisionPageElement);


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let launchesWebcastPageElement = await launchesWebcastPage(launches.links);
    information__2.append(launchesWebcastPageElement);

    let launchesArticlePageElement = await launchesArticlePage(launches.links);
    information__2.append(launchesArticlePageElement);

    let launchesWikiPageElement = await launchesWikiPage(launches.links);
    information__2.append(launchesWikiPageElement);


    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Launches data";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Window";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${launches.window}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Flight number";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${launches.flight_number}`;
    div2.append(span2, strong2);
  
    divp.append(div1, div2);
    information__table__1.append(divp);


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Launches details";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Details: ";
    let strong3= document.createElement("strong");
    strong3.textContent = `${launches.details}`;
    div3.append(span3, strong3);
  
    divs.append(div3);
    information__table__2.append(divs)

    let sectionImage = document.querySelector("#section__information__1");

    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/gif/purple.webp"); 
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "270px"; 
    img3.style.left = "675px"; 
    img3.style.width = "300px"; 
    img3.style.height = "150px";
    img3.style.marginTop = "10px";
    img3.style.marginLeft = "300px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    let img4 = document.createElement("img");
    img4.setAttribute("src", "storage/img/gif/purple.webp"); 
    img4.classList.add("imagen-paginacion-roadster");
    img4.style.position = "absolute";
    img4.style.top = "270px"; 
    img4.style.left = "-230px"; 
    img4.style.width = "300px"; 
    img4.style.height = "150px";
    img4.style.marginTop = "10px";
    img4.style.marginLeft = "300px";
    img4.style.borderRadius = "10%";
    sectionImage.appendChild(img4);

    let img5 = document.createElement("img");
    img5.setAttribute("src", "storage/img/gif/co.webp");
    img5.classList.add("imagen-paginacion-roadster");
    img5.style.position = "absolute";
    img5.style.top = "270px"; 
    img5.style.left = "-230px"; 
    img5.style.width = "300px"; 
    img5.style.height = "150px";
    img5.style.marginTop = "-200px";
    img5.style.marginLeft = "757px";
    img5.style.borderRadius = "10%";
    sectionImage.appendChild(img5);
    

};


export const paginationLaunches = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunches(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDLaunches)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDLaunches)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDLaunches)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}


// Apartado Cores

const getIDCores = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCores(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let cores = await getIdCores(e.target.id);
    console.log(cores);

    await nameCores(cores.serial);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let coresIdPageElement = await coresIdPage(cores.id);
    description__item.append(coresIdPageElement);

    let coresLaunchesPageElement = await coresLaunchesPage(cores.launches);
    description__item.append(coresLaunchesPageElement);

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let coresSerialPageElement = await coresSerialPage(cores.serial);
    information__2.append(coresSerialPageElement);

    let coresStatusPageElement = await coresStatusPage(cores.status);
    information__2.append(coresStatusPageElement);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Cores attempts and landings";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Rtls attempts";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${cores.rtls_attempts}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Rtls landings";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${cores.rtls_landings}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Asds attempts";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${cores.asds_attempts}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Asds landings";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${cores.asds_landings}`;
    div4.append(span4, strong4);
  
    divp.append(div1, div2, div3, div4);
    information__table__1.append(divp);


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Cores details";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Last update: ";
    let strong5= document.createElement("strong");
    strong5.textContent = `${cores.last_update}`;
    div5.append(span5, strong5);
  
    divs.append(div5);
    information__table__2.append(divs)

    let sectionImage = document.querySelector("#section__information__1");

    let img2 = document.createElement("img");
    img2.setAttribute("src", "storage/img/gif/co.webp"); 
    img2.classList.add("imagen-paginacion-roadster");
    img2.style.position = "absolute";
    img2.style.top = "220px"; 
    img2.style.left = "150px"; 
    img2.style.width = "445px"; 
    img2.style.height = "350px";
    img2.style.marginTop = "10px";
    img2.style.marginLeft = "300px";
    img2.style.borderRadius = "10%";
    sectionImage.appendChild(img2);

    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/gif/purple.webp"); 
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "270px"; 
    img3.style.left = "675px"; 
    img3.style.width = "300px"; 
    img3.style.height = "150px";
    img3.style.marginTop = "10px";
    img3.style.marginLeft = "300px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    let img4 = document.createElement("img");
    img4.setAttribute("src", "storage/img/gif/purple.webp"); 
    img4.classList.add("imagen-paginacion-roadster");
    img4.style.position = "absolute";
    img4.style.top = "270px"; 
    img4.style.left = "-230px"; 
    img4.style.width = "300px"; 
    img4.style.height = "150px";
    img4.style.marginTop = "10px";
    img4.style.marginLeft = "300px";
    img4.style.borderRadius = "10%";
    sectionImage.appendChild(img4);

};

export const paginationCores = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDCores)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDCores)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDCores)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}


// Apartado Landpads

const getIDLandpads = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLandpads(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let landpads = await getIdLandpads(e.target.id);
    console.log(landpads);

    await nameLandpads(landpads.name);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let LandpadsIdPageElement = await landpadsIdPage(landpads.id);
    description__item.append(LandpadsIdPageElement);

    let LandpadsFullNamePageElement = await landpadsFullNamePage(landpads.full_name);
    description__item.append(LandpadsFullNamePageElement);

    let LandpadsStatusPageElement = await landpadsStatusPage(landpads.status);
    description__item.append(LandpadsStatusPageElement);

    let LandpadsTypePageElement = await landpadsTypePage(landpads.type);
    description__item.append(LandpadsTypePageElement);

    let LandpadsLocalityPageElement = await landpadsLocalityPage(landpads.locality);
    description__item.append(LandpadsLocalityPageElement);

    let LandpadsRegionPageElement = await landpadsRegionPage(landpads.region);
    description__item.append(LandpadsRegionPageElement);

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let LandpadsWikiPageElement = await landpadsWikiPage(landpads.wikipedia);
    information__2.append(LandpadsWikiPageElement);

    let sectionImage = document.querySelector("#section__information__1");

    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/gif/purple.webp"); 
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "270px"; 
    img3.style.left = "580px"; 
    img3.style.width = "300px"; 
    img3.style.height = "150px";
    img3.style.marginTop = "85px";
    img3.style.marginLeft = "300px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    let img4 = document.createElement("img");
    img4.setAttribute("src", "storage/img/gif/purple.webp");
    img4.classList.add("imagen-paginacion-roadster");
    img4.style.position = "absolute";
    img4.style.top = "270px"; 
    img4.style.left = "-125px"; 
    img4.style.width = "300px"; 
    img4.style.height = "150px";
    img4.style.marginTop = "85px";
    img4.style.marginLeft = "300px";
    img4.style.borderRadius = "10%";
    sectionImage.appendChild(img4);

    let img5 = document.createElement("img");
    img5.setAttribute("src", "storage/img/gif/co.webp");
    img5.classList.add("imagen-paginacion-roadster");
    img5.style.position = "absolute";
    img5.style.top = "270px"; 
    img5.style.left = "-230px"; 
    img5.style.width = "300px"; 
    img5.style.height = "150px";
    img5.style.marginTop = "-200px";
    img5.style.marginLeft = "757px";
    img5.style.borderRadius = "10%";
    sectionImage.appendChild(img5);


};

export const paginationLandpads = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLandpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDLandpads)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDLandpads)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDLandpads)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}

// Apartado Ships

const getIDShips = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationShips(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let ship = await getIdShips(e.target.id);
    console.log(ship);

    await nameShips(ship.name);

};

export const paginationShips = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllShips(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDShips)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDShips)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDShips)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}

// Apartado Company

export const paginationCompany = async() => {
    let data = await getCompany()
    await clear()

    await nameCompany(data.name);
}

// Apartado DRagons

const getIDDragons = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationDragons(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let dragons = await getIdDragons(e.target.id);
    console.log(dragons);

    await nameDragons(dragons.name);

};

export const paginationDragons = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllDragons(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDDragons)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDDragons)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDDragons)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}

// Apartado history

const getIDHistory = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationHistory(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let history = await getIdHistory(e.target.id);
    console.log(history);

    await nameHistory(history.title);

};

export const paginationHistory = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllHistory(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDHistory)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDHistory)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDHistory)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}

// Apartado launchpads

const getIDLaunchpads = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let launchpads = await getIdLaunchpads(e.target.id);
    console.log(launchpads);

    await nameLaunchpads(launchpads.name);

};

export const paginationLaunchpads = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunchpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDLaunchpads)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDLaunchpads)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDLaunchpads)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}

// Apartado payloads

const getIDPayloads = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationPayloads(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let payloads = await getIdPayloads(e.target.id);
    console.log(payloads);

    await namePayloads(payloads.name);

};

export const paginationPayloads = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllPayloads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDPayloads)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDPayloads)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDPayloads)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}

// Apartado Roadster

export const paginationRoadster = async() => {
    let data = await getRoadster()
    await clear()

    await nameRoadster(data.name);
}

// Apartado payloads

const getIDStarlink = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationStarlink(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let starlink = await getIdStarlink(e.target.id);
    console.log(starlink);

    await nameStarlink(starlink.spaceTrack.OBJECT_NAME);

};

export const paginationStarlink = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllStarlink(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDStarlink)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDStarlink)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDStarlink)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}