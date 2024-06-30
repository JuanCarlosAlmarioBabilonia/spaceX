export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")
    img.setAttribute("width", 40)
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")
    img.setAttribute("width", 40)
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")
    img.setAttribute("width", 40)
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")
    img.setAttribute("width", 40)
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}


// INFORMACION CAPSULES

export const capsulesIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div;
}

export const capsulestypePage  = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div;
}

export const capsulesDescriptionPage  = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div;
}

export const capsulesUpdatePage  = async(last_update)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last update:"
    let small = document.createElement('small');
    small.textContent = last_update
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

// INFORMACION CREW

export const crewIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const crewLaunchesPage  = async(launches)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:"
    let small = document.createElement('small');
    small.textContent = launches
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const crewWikiPage  = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let wiki = document.createElement('a');
    wiki.textContent = "Click aqui para ver el articulo de wikipedia";
    wiki.style.color = "white"; 
    wiki.style.textDecoration = "underline"; 
    wiki.href = wikipedia; 
    wiki.style.fontSize = "14px";
    wiki.target = "_blank";

    divLast.appendChild(wiki);
    div.append(divFirst, divLast);

    return div; 
}
export const crewAgencyPage  = async(agency)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Agency:"
    let small = document.createElement('small');
    small.textContent = agency
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const crewStatusPage  = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

// INFORMACION LAUNCHES


export const launchesIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchesRocketPage  = async(rocket)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket:"
    let small = document.createElement('small');
    small.textContent = rocket
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchesPadPage  = async(launchpad)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launchpad:"
    let small = document.createElement('small');
    small.textContent = launchpad
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchesStaticPage  = async(static_fire_date_utc)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Static fire date utc:"
    let small = document.createElement('small');
    small.textContent = static_fire_date_utc
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchesUtcPage  = async(date_utc)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Date utc:"
    let small = document.createElement('small');
    small.textContent = date_utc
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchesLocalPage  = async(date_local)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Date local:"
    let small = document.createElement('small');
    small.textContent = date_local
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchesPrecisionPage  = async(date_precision)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Date precision:"
    let small = document.createElement('small');
    small.textContent = date_precision
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchesWebcastPage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Webcast:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let link = document.createElement('a');
    link.textContent = "Click aqui para ver el video";
    link.style.color = "white"; 
    link.style.textDecoration = "underline"; 
    link.href = links.webcast; 
    link.style.fontSize = "14px";
    link.target = "_blank";
    divLast.appendChild(link);
    
    div.append(divFirst, divLast);

    return div; 
}

export const launchesArticlePage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Article:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let link = document.createElement('a');
    link.textContent = "Click aqui para ver el articulo";
    link.style.color = "white"; 
    link.style.textDecoration = "underline"; 
    link.href = links.article; 
    link.style.fontSize = "14px";
    link.target = "_blank";
    divLast.appendChild(link);
    
    div.append(divFirst, divLast);

    return div; 
}

export const launchesWikiPage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let link = document.createElement('a');
    link.textContent = "Click aqui para ver el articulo de wikipedia";
    link.style.color = "white"; 
    link.style.textDecoration = "underline"; 
    link.href = links.wikipedia; 
    link.style.fontSize = "14px";
    link.target = "_blank";
    divLast.appendChild(link);
    
    div.append(divFirst, divLast);

    return div; 
}

// INFORMACION CORES

export const coresIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const coresLaunchesPage  = async(launches)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:"
    let small = document.createElement('small');
    small.textContent = launches
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const coresSerialPage  = async(serial)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Serial:"
    let small = document.createElement('small');
    small.textContent = serial
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const coresStatusPage  = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

// APARTADO DE LANDPADS

export const landpadsIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const landpadsFullNamePage  = async(full_name)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Full name:"
    let small = document.createElement('small');
    small.textContent = full_name
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const landpadsStatusPage  = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const landpadsTypePage  = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const landpadsLocalityPage  = async(locality)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Locality:"
    let small = document.createElement('small');
    small.textContent = locality
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const landpadsRegionPage  = async(region)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Region:"
    let small = document.createElement('small');
    small.textContent = region
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const landpadsWikiPage  = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let wiki = document.createElement('a');
    wiki.textContent = "Click aqui para ver el articulo de wikipedia";
    wiki.style.color = "white"; 
    wiki.style.textDecoration = "underline"; 
    wiki.href = wikipedia; 
    wiki.style.fontSize = "14px";
    wiki.target = "_blank";

    divLast.appendChild(wiki);
    div.append(divFirst, divLast);

    return div; 
}

// APARTADO DE SHIPS

export const ShipsIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const ShipsTypePage  = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const ShipsHomePortPage  = async(home_port)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Home port:"
    let small = document.createElement('small');
    small.textContent = home_port
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const ShipsActivePage  = async(active)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Active:"
    let small = document.createElement('small');
    small.textContent = active
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const ShipsLinkPage  = async(link)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Link:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let linki = document.createElement('a');
    linki.textContent = "Click aqui para ver el articulo";
    linki.style.color = "white"; 
    linki.style.textDecoration = "underline"; 
    linki.href = link; 
    linki.style.fontSize = "14px";
    linki.target = "_blank";

    divLast.appendChild(linki);
    div.append(divFirst, divLast);

    return div; 
}

// APARTADO DE COMPANY

export const CompanyIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyFounderPage  = async(founder)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Founder:"
    let small = document.createElement('small');
    small.textContent = founder
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyAdressPage  = async(adress)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Adress:"
    let small = document.createElement('small');
    small.textContent = adress
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyCityPage  = async(city)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "City:"
    let small = document.createElement('small');
    small.textContent = city
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyStatePage  = async(state)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "State:"
    let small = document.createElement('small');
    small.textContent = state
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyFoundedPage  = async(founded)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Founded:"
    let small = document.createElement('small');
    small.textContent = founded
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyEmployeesPage  = async(employees)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Employees:"
    let small = document.createElement('small');
    small.textContent = employees
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyVehiclesPage  = async(vehicles)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Vehicles:"
    let small = document.createElement('small');
    small.textContent = vehicles
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyLaunchSitesPage  = async(launch_sites)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch sites:"
    let small = document.createElement('small');
    small.textContent = launch_sites
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const CompanyTestSitesPage  = async(text_sites)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Text sites:"
    let small = document.createElement('small');
    small.textContent = text_sites
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const companyLinkPage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Website:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let linki = document.createElement('a');
    linki.textContent = "Click aqui para ver el articulo";
    linki.style.color = "white"; 
    linki.style.textDecoration = "underline"; 
    linki.href = links; 
    linki.style.fontSize = "14px";
    linki.target = "_blank";

    divLast.appendChild(linki);
    div.append(divFirst, divLast);

    return div; 
}

export const companyFlickrPage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Flickr:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let linki = document.createElement('a');
    linki.textContent = "Click aqui para ver el articulo";
    linki.style.color = "white"; 
    linki.style.textDecoration = "underline"; 
    linki.href = links; 
    linki.style.fontSize = "14px";
    linki.target = "_blank";

    divLast.appendChild(linki);
    div.append(divFirst, divLast);

    return div; 
}

export const companyTwitterPage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Twitter:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let linki = document.createElement('a');
    linki.textContent = "Click aqui para ver el articulo";
    linki.style.color = "white"; 
    linki.style.textDecoration = "underline"; 
    linki.href = links; 
    linki.style.fontSize = "14px";
    linki.target = "_blank";

    divLast.appendChild(linki);
    div.append(divFirst, divLast);

    return div; 
}

export const companyElonTwitterPage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Elon Twitter:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let linki = document.createElement('a');
    linki.textContent = "Click aqui para ver el articulo";
    linki.style.color = "white"; 
    linki.style.textDecoration = "underline"; 
    linki.href = links; 
    linki.style.fontSize = "14px";
    linki.target = "_blank";

    divLast.appendChild(linki);
    div.append(divFirst, divLast);

    return div; 

}

// APARTADO DE DRAGONS

export const dragonsIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsTypePage  = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsActivePage  = async(active)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Active:"
    let small = document.createElement('small');
    small.textContent = active
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsCrewCapacityPage  = async(crew_capacity)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Crew capacity:"
    let small = document.createElement('small');
    small.textContent = crew_capacity
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsSidewallPage  = async(sidewall_angle_deg)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Sidewall angle deg:"
    let small = document.createElement('small');
    small.textContent = sidewall_angle_deg
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsOrbitPage  = async(orbit_duration_yr)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Orbit duration yr:"
    let small = document.createElement('small');
    small.textContent = orbit_duration_yr
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsDryKgPage  = async(dry_mass_kg)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dry mass (kg):"
    let small = document.createElement('small');
    small.textContent = dry_mass_kg
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsDryLbPage  = async(dry_mass_lb)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dry mass (lb):"
    let small = document.createElement('small');
    small.textContent = dry_mass_lb
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsFirstFlightPage  = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "First flight:"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsWikiPage  = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let wiki = document.createElement('a');
    wiki.textContent = "Click aqui para ver el articulo de wikipedia";
    wiki.style.color = "white"; 
    wiki.style.textDecoration = "underline"; 
    wiki.href = wikipedia; 
    wiki.style.fontSize = "14px";
    wiki.target = "_blank";

    divLast.appendChild(wiki);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsHeatShieldPage  = async(heat_shield)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = "Heat Shield"
    h2.style.color= "white";
    let h3 = document.createElement('h3');
    h3.textContent = "material:"
    h3.style.marginTop="15px"
    let small = document.createElement('small');
    small.textContent = heat_shield
    divLast.append(h2, h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsSizeMetersPage  = async(heat_shield)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Size meter:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = heat_shield
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsTempDegreesPage  = async(heat_shield)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Temp degrees:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = heat_shield
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsDevPartnerPage  = async(heat_shield)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dev partner:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = heat_shield
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsLaunchPMKPage  = async(launch_payload_mass)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = "Launch payload mass"
    h2.style.color= "white";
    let h3 = document.createElement('h3');
    h3.textContent = "Kg:"
    h3.style.marginTop="15px"
    let small = document.createElement('small');
    small.textContent = launch_payload_mass
    divLast.append(h2, h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsLaunchPMLPage  = async(launch_payload_mass)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Lb:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = launch_payload_mass
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsLaunchPBCMPage  = async(launch_payload_vol)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = "Launch payload vol"
    h2.style.color= "white";
    let h3 = document.createElement('h3');
    h3.textContent = "Cubic meters:"
    h3.style.marginTop="15px"
    let small = document.createElement('small');
    small.textContent = launch_payload_vol
    divLast.append(h2, h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsLaunchPBCFPage  = async(launch_payload_vol)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Cubic feet:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = launch_payload_vol
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsReturnPMKGPage  = async(return_payload_mass)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = "Return payload mass"
    h2.style.color= "white";
    let h3 = document.createElement('h3');
    h3.textContent = "Kg:"
    h3.style.marginTop="15px"
    let small = document.createElement('small');
    small.textContent = return_payload_mass
    divLast.append(h2, h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsReturnPMLBPage  = async(return_payload_mass)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Lb:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = return_payload_mass
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsReturnPVCMPage  = async(return_payload_vol)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = "Return payload vol"
    h2.style.color= "white";
    let h3 = document.createElement('h3');
    h3.textContent = "Cubic meters:"
    h3.style.marginTop="15px"
    let small = document.createElement('small');
    small.textContent = return_payload_vol
    divLast.append(h2, h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsReturnPVCFPage  = async(return_payload_vol)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Cubic feet:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = return_payload_vol
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsHeightMetersPage  = async(height_w_trunk)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = "Height W Trunk"
    h2.style.color= "white";
    let h3 = document.createElement('h3');
    h3.textContent = "Meters:"
    h3.style.marginTop="15px"
    let small = document.createElement('small');
    small.textContent = height_w_trunk
    divLast.append(h2, h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsHeightFeetPage  = async(height_w_trunk)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Feet:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = height_w_trunk
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsDiameterMPage  = async(diameter)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = "Diameter"
    h2.style.color= "white";
    let h3 = document.createElement('h3');
    h3.textContent = "Meters:"
    h3.style.marginTop="15px"
    let small = document.createElement('small');
    small.textContent = diameter
    divLast.append(h2, h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const dragonsDiameterFPage  = async(diameter)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Feet:"
    h3.style.marginLeft="50px";
    h3.style.marginTop="-15px"
    let small = document.createElement('small');
    small.textContent = diameter
    small.style.marginLeft="50px";
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

// APARTADO DE HISTORY

export const historyIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const historyLinkPage  = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Link:"
    let small = document.createElement('small');
    divLast.append(h3, small);

    let linki = document.createElement('a');
    linki.textContent = "Click aqui para ver el articulo";
    linki.style.color = "white"; 
    linki.style.textDecoration = "underline"; 
    linki.href = links; 
    linki.style.fontSize = "14px";
    linki.target = "_blank";

    divLast.appendChild(linki);
    div.append(divFirst, divLast);

    return div; 
}

// APARTADO DE LAUNCHPADS

export const launchpadsIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchpadsRocketsPage  = async(rockets)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rockets:"
    let small = document.createElement('small');
    small.textContent = rockets
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchpadsFullNamePage  = async(full_name)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Full name:"
    let small = document.createElement('small');
    small.textContent = full_name
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchpadsLocalityPage  = async(locality)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Locality:"
    let small = document.createElement('small');
    small.textContent = locality
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const launchpadsRegionPage  = async(region)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/gif/ton.webp")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Region:"
    let small = document.createElement('small');
    small.textContent = region
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


