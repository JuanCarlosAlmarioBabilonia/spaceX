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
    landpadsWikiPage,
    ShipsIdPage,
    ShipsTypePage,
    ShipsHomePortPage,
    ShipsActivePage,
    ShipsLinkPage,
    CompanyIdPage,
    CompanyFounderPage,
    CompanyAdressPage,
    CompanyCityPage,
    CompanyStatePage,
    CompanyFoundedPage,
    CompanyEmployeesPage,
    CompanyVehiclesPage,
    CompanyLaunchSitesPage,
    CompanyTestSitesPage,
    companyLinkPage,
    companyFlickrPage,
    companyTwitterPage,
    companyElonTwitterPage,
    dragonsIdPage,
    dragonsTypePage,
    dragonsActivePage,
    dragonsCrewCapacityPage,
    dragonsSidewallPage,
    dragonsOrbitPage,
    dragonsDryKgPage,
    dragonsDryLbPage,
    dragonsFirstFlightPage,
    dragonsWikiPage,
    dragonsHeatShieldPage,
    dragonsSizeMetersPage,
    dragonsTempDegreesPage,
    dragonsDevPartnerPage,
    dragonsLaunchPMKPage,
    dragonsLaunchPMLPage,
    dragonsLaunchPBCMPage,
    dragonsLaunchPBCFPage,
    dragonsReturnPMKGPage,
    dragonsReturnPMLBPage,
    dragonsReturnPVCMPage,
    dragonsReturnPVCFPage,
    dragonsHeightMetersPage,
    dragonsHeightFeetPage,
    dragonsDiameterMPage,
    dragonsDiameterFPage,
    historyIdPage,
    historyLinkPage,
    launchpadsIdPage,
    launchpadsFullNamePage,
    launchpadsLocalityPage,
    launchpadsRegionPage,
    launchpadsTimezonePage,
    launchpadsStatusPage,
    payloadsIdPage,
    payloadsTypePage,
    payloadsReusedPage,
    payloadsOrbitPage,
    payloadsReferenceSystemPage,
    payloadsRegimePage,
    payloadsMassKgPage,
    payloadsMassLbsPage,
    payloadsCustomersPage,
    payloadsNationalitiesPage,
    payloadsManufacturersPage,
    payloadsEccentricityPage,
    payloadsPeriapsisKmPage,
    payloadsApoapsisKmPage,
    payloadsInclinationDegPage,
    RoadsterIdPage,
    RoadsterLaunchDUPage,
    RoadsterLaunchMKGPage,
    RoadsterLaunchMLBSPage,
    RoadsterNoradIdPage,
    RoadsterEpochJdPage,
    RoadsterApoapsisAuPage,
    RoadsterPeriapsisAuPage,
    RoadsterSemiPage,
    RoadsterEccentricityPage,
    RoadsterInclinationPage,
    RoadsterLongitudePage,
    RoadsterPeriapsisArgPage,
    RoadsterPeriodDaysPage,
    RoadsterSpeedKphPage,
    RoadsterSpeedMphPage,
    RoadsterEarthDKMPage,
    RoadsterEarthDMIPage,
    RoadsterMarsDKMPage,
    RoadsterMarsDMIPage,
    RoadsterWikiPage,
    RoadsterYoutubePage,
    StarlinkIdPage,
    StarlinkVersionPage,
    StarlinkCCSDSPage,
    StarlinkCOMMENTPage,
    StarlinkORIGINATORPage,
    StarlinkOBJECTIDPage,
    StarlinkCENTERNAMEPage,
    StarlinkREFFRAMEPage,
    StarlinkTYMESYSTEMPage,
    StarlinkMEANPage,
    StarlinkCLASSIFICATIONPage,
    StarlinkCOUNTRYCODEPage,
    StarlinkMEANMOTIONPage,
    StarlinkECCENTRICITYPage,
    StarlinkINCLINATIONPage,
    StarlinkRAPage,
    StarlinkARGPage,
    StarlinkMEANANOMALYPage,
    StarlinkEPHEMERISPage,
    StarlinkNORADPage,
    StarlinkELEMENTPage,
    StarlinkREVPage,
    StarlinkBSTARPage,
    StarlinkMEANMDOTPage,
    StarlinkMEANMDOOTPage,
    StarlinkSEMIMAJORPage,
    StarlinkPERIODPage,
    StarlinkAPOAPSISPage,
    StarlinkPERIAPSISPage
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
    imageLaunches,
    ImageLandpads,
    imageShips,
    imageDragons,
    imageLaunchpads,
    imageRoadster
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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);
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

    let img5 = document.createElement("img");
    img5.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img5.classList.add("imagen-paginacion-roadster");
    img5.style.position = "absolute";
    img5.style.top = "705px"; 
    img5.style.left = "-557px"; 
    img5.style.width = "250px"; 
    img5.style.height = "100px";
    img5.style.marginTop = "10px";
    img5.style.marginLeft = "300px";
    img5.style.borderRadius = "10%";
    sectionImage.appendChild(img5);


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
    await imageCrew([crew]);

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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);
    
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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);
    

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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);

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
    await ImageLandpads([landpads]);

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

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Landpads data";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Latitude";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${landpads.latitude}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Longitude";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${landpads.longitude}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Landing attempts";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${landpads.landing_attempts}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Landing success";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${landpads.landing_successes}`;
    div4.append(span4, strong4);
  
    divp.append(div1, div2, div3, div4);
    information__table__1.append(divp);


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Landpads details";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Details:";
    let strong5= document.createElement("strong");
    strong5.textContent = `${landpads.details}`;
    div5.append(span5, strong5);
  
    divs.append(div5);
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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);


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
    await imageShips(ship);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let ShipsIdPageElement = await ShipsIdPage(ship.id);
    description__item.append(ShipsIdPageElement);

    let ShipsTypePageElement = await ShipsTypePage(ship.type);
    description__item.append(ShipsTypePageElement);

    let ShipsHomePortPageElement = await ShipsHomePortPage(ship.home_port);
    description__item.append(ShipsHomePortPageElement);

    let ShipsActivePageElement = await ShipsActivePage(ship.active);
    description__item.append(ShipsActivePageElement);


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let ShipsLinkPageElement = await ShipsLinkPage(ship.link);
    information__2.append(ShipsLinkPageElement);


    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Ships data";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Imo";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${ship.imo}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Mmsi";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${ship.mmsi}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Abs";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${ship.abs}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Class";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${ship.class}`;
    div4.append(span4, strong4);

    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Mass (kg)";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${ship.mass_kg}`;
    div5.append(span5, strong5)
    
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Mass (lbs)";
    let strong6 = document.createElement("strong");
    strong6.textContent = `${ship.mass_lbs}`;
    div6.append(span6, strong6)

    let div7 = document.createElement("div");
    let span7 = document.createElement("span");
    span7.textContent = "Year built";
    let strong7 = document.createElement("strong");
    strong7.textContent = `${ship.year_built}`;
    div7.append(span7, strong7)
  
    divp.append(div1, div2, div3, div4, div5, div6, div7);
    information__table__1.append(divp);


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Ships legacy id";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Legacy id:";
    let strong8= document.createElement("strong");
    strong8.textContent = `${ship.legacy_id}`;
    div8.append(span8, strong8);
  
    divs.append(div8);
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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);

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

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let companyIdPageElement = await CompanyIdPage(data.id);
    description__item.append(companyIdPageElement);

    let companyFounderPageElement = await CompanyFounderPage(data.founder);
    description__item.append(companyFounderPageElement);

    let companyAdressPageElement = await CompanyAdressPage(data.headquarters.address);
    description__item.append(companyAdressPageElement);

    let companyCityPageElement = await CompanyCityPage(data.headquarters.city);
    description__item.append(companyCityPageElement);

    let companyStatePageElement = await CompanyStatePage(data.headquarters.state);
    description__item.append(companyStatePageElement);

    let companyFoundedPageElement = await CompanyFoundedPage(data.founded);
    description__item.append(companyFoundedPageElement);

    let companyEmployeesPageElement = await CompanyEmployeesPage(data.employees);
    description__item.append(companyEmployeesPageElement);

    let companyVehiclesPageElement = await CompanyVehiclesPage(data.vehicles);
    description__item.append(companyVehiclesPageElement);

    let companyLaunchSitesPageElement = await CompanyLaunchSitesPage(data.launch_sites);
    description__item.append(companyLaunchSitesPageElement);

    let companyTestSitesPageElement = await CompanyTestSitesPage(data.test_sites);
    description__item.append(companyTestSitesPageElement);


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let companyLinkPageElement = await companyLinkPage(data.links.website);
    information__2.append(companyLinkPageElement);

    let companyflickrPageElement = await companyFlickrPage(data.links.flickr);
    information__2.append(companyflickrPageElement);

    let companyTwitterPageElement = await companyTwitterPage(data.links.twitter);
    information__2.append(companyTwitterPageElement);

    let companyElonTwitterPageElement = await companyElonTwitterPage(data.links.elon_twitter);
    information__2.append(companyElonTwitterPageElement);

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Company data";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Ceo";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${data.ceo}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Cto";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${data.cto}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Coo";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${data.coo}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Cto propulsion";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${data.cto_propulsion}`;
    div4.append(span4, strong4);

    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Valuation ";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${data.valuation}`;
    div5.append(span5, strong5)
  
    divp.append(div1, div2, div3, div4, div5);
    information__table__1.append(divp);


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Company detail";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Summary:";
    let strong8= document.createElement("strong");
    strong8.textContent = `${data.summary}`;
    div8.append(span8, strong8);
  
    divs.append(div8);
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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/elon.webp");
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "480px"; 
    img6.style.left = "-300px"; 
    img6.style.width = "450px"; 
    img6.style.height = "400px";
    img6.style.marginTop = "-200px";
    img6.style.marginLeft = "757px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);

    let img7 = document.createElement("img");
    img7.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img7.classList.add("imagen-paginacion-roadster");
    img7.style.position = "absolute";
    img7.style.top = "705px"; 
    img7.style.left = "-557px"; 
    img7.style.width = "250px"; 
    img7.style.height = "100px";
    img7.style.marginTop = "10px";
    img7.style.marginLeft = "300px";
    img7.style.borderRadius = "10%";
    sectionImage.appendChild(img7);

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
    await imageDragons(dragons.flickr_images);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let dragonsIdPageElement = await dragonsIdPage(dragons.id);
    description__item.append(dragonsIdPageElement);

    let dragonsTypePageElement = await dragonsTypePage(dragons.type);
    description__item.append(dragonsTypePageElement);

    let dragonsActivePageElement = await dragonsActivePage(dragons.active);
    description__item.append(dragonsActivePageElement);

    let dragonsCrewCapacityPageElement = await dragonsCrewCapacityPage(dragons.crew_capacity);
    description__item.append(dragonsCrewCapacityPageElement);

    let dragonsSidewallPageElement = await dragonsSidewallPage(dragons.sidewall_angle_deg);
    description__item.append(dragonsSidewallPageElement);

    let dragonsOrbitPageElement = await dragonsOrbitPage(dragons.orbit_duration_yr);
    description__item.append(dragonsOrbitPageElement);

    let dragonsDryKgPageElement = await dragonsDryKgPage(dragons.dry_mass_kg);
    description__item.append(dragonsDryKgPageElement);

    let dragonsDryLbPageElement = await dragonsDryLbPage(dragons.dry_mass_lb);
    description__item.append(dragonsDryLbPageElement);

    let dragonsFirstFlightPageElement = await dragonsFirstFlightPage(dragons.first_flight);
    description__item.append(dragonsFirstFlightPageElement);


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let dragonsWikiPageElement = await dragonsWikiPage(dragons.wikipedia);
    information__2.append(dragonsWikiPageElement);

    let dragonsHeatShieldPageElement = await dragonsHeatShieldPage(dragons.heat_shield.material);
    information__2.append(dragonsHeatShieldPageElement);

    let dragonsSizeMeterPageElement = await dragonsSizeMetersPage(dragons.heat_shield.size_meters);
    information__2.append(dragonsSizeMeterPageElement);

    let dragonsTempDegreesPageElement = await dragonsTempDegreesPage(dragons.heat_shield.temp_degrees);
    information__2.append(dragonsTempDegreesPageElement);

    let dragonsDevPartnerPageElement = await dragonsDevPartnerPage(dragons.heat_shield.dev_partner);
    information__2.append(dragonsDevPartnerPageElement);

    let dragonsLaunchPMPageElement = await dragonsLaunchPMKPage(dragons.launch_payload_mass.kg);
    information__2.append(dragonsLaunchPMPageElement);

    let dragonsLaunchPM2PageElement = await dragonsLaunchPMLPage(dragons.launch_payload_mass.lb);
    information__2.append(dragonsLaunchPM2PageElement);

    let dragonsLaunchPBCMPageElement = await dragonsLaunchPBCMPage(dragons.launch_payload_vol.cubic_meters);
    information__2.append(dragonsLaunchPBCMPageElement);

    let dragonsLaunchPBCFPageElement = await dragonsLaunchPBCFPage(dragons.launch_payload_vol.cubic_feet);
    information__2.append(dragonsLaunchPBCFPageElement);

    let dragonsReturnPMKGPageElement = await dragonsReturnPMKGPage(dragons.return_payload_mass.kg);
    information__2.append(dragonsReturnPMKGPageElement);

    let dragonsReturnPMLBPageElement = await dragonsReturnPMLBPage(dragons.return_payload_mass.lb);
    information__2.append(dragonsReturnPMLBPageElement);

    let dragonsReturnPVCMPageElement = await dragonsReturnPVCMPage(dragons.return_payload_vol.cubic_meters);
    information__2.append(dragonsReturnPVCMPageElement);

    let dragonsReturnPVCFPageElement = await dragonsReturnPVCFPage(dragons.return_payload_vol.cubic_feet);
    information__2.append(dragonsReturnPVCFPageElement);

    let dragonsHeightMetersPageElement = await dragonsHeightMetersPage(dragons.height_w_trunk.meters);
    information__2.append(dragonsHeightMetersPageElement);

    let dragonsHeightFeetPageElement = await dragonsHeightFeetPage(dragons.height_w_trunk.feet);
    information__2.append(dragonsHeightFeetPageElement);

    let dragonsDiameterMPageElement = await dragonsDiameterMPage(dragons.diameter.meters);
    information__2.append(dragonsDiameterMPageElement);

    let dragonsDiameterFPageElement = await dragonsDiameterFPage(dragons.diameter.feet);
    information__2.append(dragonsDiameterFPageElement);


    
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Dragons data";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Type";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${dragons.thrusters[0].type}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Amount";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${dragons.thrusters[0].amount}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Pods";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${dragons.thrusters[0].pods}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Fuel 1";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${dragons.thrusters[0].fuel_1}`;
    div4.append(span4, strong4);

    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Fuel 2";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${dragons.thrusters[0].fuel_2}`;
    div5.append(span5, strong5)
    
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Isp";
    let strong6 = document.createElement("strong");
    strong6.textContent = `${dragons.thrusters[0].isp}`;
    div6.append(span6, strong6)
  
    divp.append(div1, div2, div3, div4, div5, div6);
    information__table__1.append(divp);


    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Dragons details";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Description:";
    let strong8= document.createElement("strong");
    strong8.textContent = `${dragons.description}`;
    div8.append(span8, strong8);
  
    divs.append(div8);
    information__table__2.append(divs)

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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);

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

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let historyIdPageElement = await historyIdPage(history.id);
    description__item.append(historyIdPageElement);


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let dragonsWikiPageElement = await historyLinkPage(history.links.article);
    information__2.append(dragonsWikiPageElement);


    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "History event date";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Event date utc";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${history.event_date_utc}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Event date unix";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${history.event_date_unix}`;
    div2.append(span2, strong2);
  
    divp.append(div1, div2);
    information__table__1.append(divp);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "History details";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Details:";
    let strong8= document.createElement("strong");
    strong8.textContent = `${history.details}`;
    div8.append(span8, strong8);
  
    divs.append(div8);
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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);
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
    await imageLaunchpads([launchpads])

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let launchapdsIdPageElement = await launchpadsIdPage(launchpads.id);
    description__item.append(launchapdsIdPageElement)


    let launchapdsFullNamePageElement = await launchpadsFullNamePage(launchpads.full_name);
    description__item.append(launchapdsFullNamePageElement)

    let launchapdsLocalityPageElement = await launchpadsLocalityPage(launchpads.locality);
    description__item.append(launchapdsLocalityPageElement)

    let launchapdsRegionPageElement = await launchpadsRegionPage(launchpads.region);
    description__item.append(launchapdsRegionPageElement)


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let launchapdsTimezonePageElement = await launchpadsTimezonePage(launchpads.timezone);
    information__2.append(launchapdsTimezonePageElement);

    let launchapdsStatusPageElement = await launchpadsStatusPage(launchpads.status);
    information__2.append(launchapdsStatusPageElement);


    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Launchpads data";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Latitude";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${launchpads.latitude}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Longitude";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${launchpads.longitude}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Launch attempts";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${launchpads.launch_attempts}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Launch successes";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${launchpads.launch_successes}`;
    div4.append(span4, strong4);
  
    divp.append(div1, div2, div3, div4);
    information__table__1.append(divp);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Launchpads details";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Details:";
    let strong8= document.createElement("strong");
    strong8.textContent = `${launchpads.details}`;
    div8.append(span8, strong8);
  
    divs.append(div8);
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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "705px"; 
    img6.style.left = "-557px"; 
    img6.style.width = "250px"; 
    img6.style.height = "100px";
    img6.style.marginTop = "10px";
    img6.style.marginLeft = "300px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);


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

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let payloadsIdPageElement = await payloadsIdPage(payloads.id);
    description__item.append(payloadsIdPageElement)

    let payloadsTypePageElement = await payloadsTypePage(payloads.type);
    description__item.append(payloadsTypePageElement)

    let payloadsReusedPageElement = await payloadsReusedPage(payloads.reused);
    description__item.append(payloadsReusedPageElement)

    let payloadsOrbitPageElement = await payloadsOrbitPage(payloads.orbit);
    description__item.append(payloadsOrbitPageElement)

    let payloadsReferenceSystemPageElement = await payloadsReferenceSystemPage(payloads.id);
    description__item.append(payloadsReferenceSystemPageElement)

    let payloadsRegimePageElement = await payloadsRegimePage(payloads.regime);
    description__item.append(payloadsRegimePageElement)

    let payloadsMassKgPageElement = await payloadsMassKgPage(payloads.mass_kg);
    description__item.append(payloadsMassKgPageElement)

    let payloadsMassLbsPageElement = await payloadsMassLbsPage(payloads.mass_lbs);
    description__item.append(payloadsMassLbsPageElement)


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let payloadsCustomersPageElement = await payloadsCustomersPage(payloads.customers);
    information__2.append(payloadsCustomersPageElement)

    let payloadsNationalitiesPageElement = await payloadsNationalitiesPage(payloads.nationalities);
    information__2.append(payloadsNationalitiesPageElement)

    let payloadsManufacturersPageElement = await payloadsManufacturersPage(payloads.manufacturers);
    information__2.append(payloadsManufacturersPageElement)

    let payloadsEccentricityPageElement = await payloadsEccentricityPage(payloads.manufacturers);
    information__2.append(payloadsEccentricityPageElement)

    let payloadsPeriapsisKmPageElement = await payloadsPeriapsisKmPage(payloads.periapsis_km);
    information__2.append(payloadsPeriapsisKmPageElement)

    let payloadsApoapsisKmPageElement = await payloadsApoapsisKmPage(payloads.apoapsis_km);
    information__2.append(payloadsApoapsisKmPageElement)

    let payloadsInclinationDegPageElement = await payloadsInclinationDegPage(payloads.inclination_deg);
    information__2.append(payloadsInclinationDegPageElement)


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

    let img6 = document.createElement("img");
    img6.setAttribute("src", "storage/img/gif/nave.jpeg");
    img6.classList.add("imagen-paginacion-roadster");
    img6.style.position = "absolute";
    img6.style.top = "500px"; 
    img6.style.left = "-230px"; 
    img6.style.width = "300px"; 
    img6.style.height = "300px";
    img6.style.marginTop = "-200px";
    img6.style.marginLeft = "757px";
    img6.style.borderRadius = "10%";
    sectionImage.appendChild(img6);

    let img7 = document.createElement("img");
    img7.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img7.classList.add("imagen-paginacion-roadster");
    img7.style.position = "absolute";
    img7.style.top = "705px"; 
    img7.style.left = "-557px"; 
    img7.style.width = "250px"; 
    img7.style.height = "100px";
    img7.style.marginTop = "10px";
    img7.style.marginLeft = "300px";
    img7.style.borderRadius = "10%";
    sectionImage.appendChild(img7);


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
    await imageRoadster(data.flickr_images)

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let RoadsterIdPageElement = await RoadsterIdPage(data.id);
    description__item.append(RoadsterIdPageElement)

    let RoadsterLaunchDUPageElement = await RoadsterLaunchDUPage(data.launch_date_unix);
    description__item.append(RoadsterLaunchDUPageElement)

    let RoadsterLaunchMKGPageElement = await RoadsterLaunchMKGPage(data.launch_mass_kg);
    description__item.append(RoadsterLaunchMKGPageElement)

    let RoadsterLaunchMLBSPageElement = await RoadsterLaunchMLBSPage(data.launch_mass_lbs);
    description__item.append(RoadsterLaunchMLBSPageElement)

    let RoadsterNoradIdPageElement = await RoadsterNoradIdPage(data.norad_id);
    description__item.append(RoadsterNoradIdPageElement)

    let RoadsterEpochJdPageElement = await RoadsterEpochJdPage(data.epoch_jd);
    description__item.append(RoadsterEpochJdPageElement)

    let RoadsterApoapsisAuPageElement = await RoadsterApoapsisAuPage(data.apoapsis_au);
    description__item.append(RoadsterApoapsisAuPageElement)

    let RoadsterPeriapsisAuPageElement = await RoadsterPeriapsisAuPage(data.periapsis_au);
    description__item.append(RoadsterPeriapsisAuPageElement)

    let RoadsterSemiPageElement = await RoadsterSemiPage(data.semi_major_axis_au);
    description__item.append(RoadsterSemiPageElement)

    let RoadsterEccentricityPageElement = await RoadsterEccentricityPage(data.eccentricity);
    description__item.append(RoadsterEccentricityPageElement)

    let RoadsterInclinationPageElement = await RoadsterInclinationPage(data.inclination);
    description__item.append(RoadsterInclinationPageElement)

    let RoadsterLongitudePageElement = await RoadsterLongitudePage(data.longitude);
    description__item.append(RoadsterLongitudePageElement)

    let RoadsterPeriapsisArgPageElement = await RoadsterPeriapsisArgPage(data.periapsis_arg);
    description__item.append(RoadsterPeriapsisArgPageElement)

    let RoadsterPeriodDaysPageElement = await RoadsterPeriodDaysPage(data.period_days);
    description__item.append(RoadsterPeriodDaysPageElement)

    let RoadsterSpeedKphPageElement = await RoadsterSpeedKphPage(data.speed_kph);
    description__item.append(RoadsterSpeedKphPageElement)

    let RoadsterSpeedMphPageElement = await RoadsterSpeedMphPage(data.speed_mph);
    description__item.append(RoadsterSpeedMphPageElement)

    let RoadsterEarthDKMPageElement = await RoadsterEarthDKMPage(data.earth_distance_km);
    description__item.append(RoadsterEarthDKMPageElement)

    let RoadsterEarthDMIPageElement = await RoadsterEarthDMIPage(data.earth_distance_mi);
    description__item.append(RoadsterEarthDMIPageElement)

    let RoadsterMarsDKMPageElement = await RoadsterMarsDKMPage(data.mars_distance_km);
    description__item.append(RoadsterMarsDKMPageElement)

    let RoadsterMarsDMIPageElement = await RoadsterMarsDMIPage(data.mars_distance_mi);
    description__item.append(RoadsterMarsDMIPageElement)


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let RoadsterWikiPageElement = await RoadsterWikiPage(data.wikipedia);
    information__2.append(RoadsterWikiPageElement)

    let RoadsterYoutubePageElement = await RoadsterYoutubePage(data.video);
    information__2.append(RoadsterYoutubePageElement)


    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Roadster data";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Launch date utc";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${data.launch_date_utc}`;
    div1.append(span1, strong1);
  
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Orbit type";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${data.orbit_type}`;
    div2.append(span2, strong2);
  
    divp.append(div1, div2);
    information__table__1.append(divp);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Roadster details";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Details:";
    let strong8= document.createElement("strong");
    strong8.textContent = `${data.details}`;
    div8.append(span8, strong8);
  
    divs.append(div8);
    information__table__2.append(divs)
    

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

    let img7 = document.createElement("img");
    img7.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img7.classList.add("imagen-paginacion-roadster");
    img7.style.position = "absolute";
    img7.style.top = "705px"; 
    img7.style.left = "-557px"; 
    img7.style.width = "250px"; 
    img7.style.height = "100px";
    img7.style.marginTop = "10px";
    img7.style.marginLeft = "300px";
    img7.style.borderRadius = "10%";
    sectionImage.appendChild(img7);


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

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    let StarlinkIdPageElement = await StarlinkIdPage(starlink.id);
    description__item.append(StarlinkIdPageElement)

    let StarlinkVersionPageElement = await StarlinkVersionPage(starlink.version);
    description__item.append(StarlinkVersionPageElement)

    let StarlinkCCSDSPageElement = await StarlinkCCSDSPage(starlink.spaceTrack.CCSDS_OMM_VERS);
    description__item.append(StarlinkCCSDSPageElement)

    let StarlinkCOMMENTPageElement = await StarlinkCOMMENTPage(starlink.spaceTrack.COMMENT);
    description__item.append(StarlinkCOMMENTPageElement)

    let StarlinkORIGINATORPageElement = await StarlinkORIGINATORPage(starlink.spaceTrack.ORIGINATOR);
    description__item.append(StarlinkORIGINATORPageElement)

    let StarlinkOBJECTIDPageElement = await StarlinkOBJECTIDPage(starlink.spaceTrack.OBJECT_ID);
    description__item.append(StarlinkOBJECTIDPageElement)

    let StarlinkCENTERNAMEPageElement = await StarlinkCENTERNAMEPage(starlink.spaceTrack.CENTER_NAME);
    description__item.append(StarlinkCENTERNAMEPageElement)

    let StarlinkREFFRAMEPageElement = await StarlinkREFFRAMEPage(starlink.spaceTrack.REF_FRAME);
    description__item.append(StarlinkREFFRAMEPageElement)

    let StarlinkTYMESYSTEMPageElement = await StarlinkTYMESYSTEMPage(starlink.spaceTrack.TIME_SYSTEM);
    description__item.append(StarlinkTYMESYSTEMPageElement)

    let StarlinkMEANPageElement = await StarlinkMEANPage(starlink.spaceTrack.MEAN_ELEMENT_THEORY);
    description__item.append(StarlinkMEANPageElement)

    let StarlinkCLASSIFICATIONPageElement = await StarlinkCLASSIFICATIONPage(starlink.spaceTrack.CLASSIFICATION_TYPE);
    description__item.append(StarlinkCLASSIFICATIONPageElement)

    let StarlinkCOUNTRYCODEPageElement = await StarlinkCOUNTRYCODEPage(starlink.spaceTrack.COUNTRY_CODE);
    description__item.append(StarlinkCOUNTRYCODEPageElement)


    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

    let StarlinkMEANMOTIONPageElement = await StarlinkMEANMOTIONPage(starlink.spaceTrack.MEAN_MOTION);
    information__2.append(StarlinkMEANMOTIONPageElement)

    let StarlinkECCENTRICITYPageElement = await StarlinkECCENTRICITYPage(starlink.spaceTrack.ECCENTRICITY);
    information__2.append(StarlinkECCENTRICITYPageElement)

    let StarlinkINCLINATIONPageElement = await StarlinkINCLINATIONPage(starlink.spaceTrack.INCLINATION);
    information__2.append(StarlinkINCLINATIONPageElement)

    let StarlinkRAPageElement = await StarlinkRAPage(starlink.spaceTrack.RA_OF_ASC_NODE);
    information__2.append(StarlinkRAPageElement)

    let StarlinkARGPageElement = await StarlinkARGPage(starlink.spaceTrack.ARG_OF_PERICENTER);
    information__2.append(StarlinkARGPageElement)

    let StarlinkMEANANOMALYPageElement = await StarlinkMEANANOMALYPage(starlink.spaceTrack.MEAN_ANOMALY);
    information__2.append(StarlinkMEANANOMALYPageElement)

    let StarlinkEPHEMERISPageElement = await StarlinkEPHEMERISPage(starlink.spaceTrack.EPHEMERIS_TYPE);
    information__2.append(StarlinkEPHEMERISPageElement)

    let StarlinkNORADPageElement = await StarlinkNORADPage(starlink.spaceTrack.NORAD_CAT_ID);
    information__2.append(StarlinkNORADPageElement)

    let StarlinkELEMENTPageElement = await StarlinkELEMENTPage(starlink.spaceTrack.ELEMENT_SET_NO);
    information__2.append(StarlinkELEMENTPageElement)

    let StarlinkREVPageElement = await StarlinkREVPage(starlink.spaceTrack.REV_AT_EPOCH);
    information__2.append(StarlinkREVPageElement)

    let StarlinkBSTARPageElement = await StarlinkBSTARPage(starlink.spaceTrack.BSTAR);
    information__2.append(StarlinkBSTARPageElement)

    let StarlinkMEANMDOTPageElement = await StarlinkMEANMDOTPage(starlink.spaceTrack.MEAN_MOTION_DOT);
    information__2.append(StarlinkMEANMDOTPageElement)

    let StarlinkMEANMDOOTPageElement = await StarlinkMEANMDOOTPage(starlink.spaceTrack.MEAN_MOTION_DDOT);
    information__2.append(StarlinkMEANMDOOTPageElement)

    let StarlinkSEMIMAJORPageElement = await StarlinkSEMIMAJORPage(starlink.spaceTrack.SEMIMAJOR_AXIS);
    information__2.append(StarlinkSEMIMAJORPageElement)

    let StarlinkPERIODPageElement = await StarlinkPERIODPage(starlink.spaceTrack.PERIOD);
    information__2.append(StarlinkPERIODPageElement)
    
    let StarlinkAPOAPSISPageElement = await StarlinkAPOAPSISPage(starlink.spaceTrack.APOAPSIS);
    information__2.append(StarlinkAPOAPSISPageElement)

    let StarlinkPERIAPSISPageElement = await StarlinkPERIAPSISPage(starlink.spaceTrack.PERIAPSIS);
    information__2.append(StarlinkPERIAPSISPageElement)


    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Starlink TLE-LINE";
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr);
  
    let divp = document.createElement("div");
    divp.classList.add("table__container__1");
  
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "TLE-LINE 0";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${starlink.spaceTrack.TLE_LINE0}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "TLE-LINE 1";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${starlink.spaceTrack.TLE_LINE1}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "TLE-LINE 2";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${starlink.spaceTrack.TLE_LINE2}`;
    div3.append(span3, strong3);

  
    divp.append(div1, div2, div3);
    information__table__1.append(divp);

    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h4 = document.createElement("h3");
    h4.textContent = "Starlink dates";
    let hr1 = document.createElement("hr");
    information__table__2.append(h4, hr1);
  
    let divs= document.createElement("div");
    divs.classList.add("table__container__2");
  
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Creation date:";
    let strong8= document.createElement("strong");
    strong8.textContent = `${starlink.spaceTrack.CREATION_DATE}`;
    div8.append(span8, strong8);

    let div9 = document.createElement("div");
    let span9 = document.createElement("span");
    span9.textContent = "Epoch:";
    let strong9= document.createElement("strong");
    strong9.textContent = `${starlink.spaceTrack.EPOCH}`;
    div9.append(span9, strong9);

    let div10 = document.createElement("div");
    let span10 = document.createElement("span");
    span10.textContent = "Launch date:";
    let strong10= document.createElement("strong");
    strong10.textContent = `${starlink.spaceTrack.LAUNCH_DATE}`;
    div10.append(span10, strong10);

    let div11 = document.createElement("div");
    let span11 = document.createElement("span");
    span11.textContent = "Decay date:";
    let strong11= document.createElement("strong");
    strong11.textContent = `${starlink.spaceTrack.DECAY_DATE}`;
    div11.append(span11, strong11);

    let div12 = document.createElement("div");
    let span12 = document.createElement("span");
    span12.textContent = "Decayed:";
    let strong12= document.createElement("strong");
    strong12.textContent = `${starlink.spaceTrack.DECAYED}`;
    div12.append(span12, strong12);
  
    divs.append(div8, div9, div10, div11, div12);
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

    let img5 = document.createElement("img");
    img5.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img5.classList.add("imagen-paginacion-roadster");
    img5.style.position = "absolute";
    img5.style.top = "705px"; 
    img5.style.left = "-557px"; 
    img5.style.width = "250px"; 
    img5.style.height = "100px";
    img5.style.marginTop = "10px";
    img5.style.marginLeft = "300px";
    img5.style.borderRadius = "10%";
    sectionImage.appendChild(img5);

    let img7 = document.createElement("img");
    img7.setAttribute("src", "storage/img/gif/spacex.jpg"); 
    img7.classList.add("imagen-paginacion-roadster");
    img7.style.position = "absolute";
    img7.style.top = "705px"; 
    img7.style.left = "-557px"; 
    img7.style.width = "250px"; 
    img7.style.height = "100px";
    img7.style.marginTop = "10px";
    img7.style.marginLeft = "300px";
    img7.style.borderRadius = "10%";
    sectionImage.appendChild(img7);

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