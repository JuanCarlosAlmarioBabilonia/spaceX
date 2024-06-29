export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
}

export const imageCrew = async (crewData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 
    crewData.forEach(member => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        
        let img = document.createElement("img");
        img.setAttribute("src", member.image);
        img.setAttribute("alt", member.name); 
        img.setAttribute("referrerpolicy", "no-referrer");


        img.setAttribute("style", "width: 280px; height: 300px; margin-left: 75px; margin-top: -90px"); 

        div.append(img);
        section__image.append(div);
    });
};

export const imageLaunches = async (launchData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 

    launchData.forEach(launch => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let imageUrl = launch.links.patch.small || "storage/img/gif/ton.webp"; 

        let img = document.createElement("img");
        img.setAttribute("src", imageUrl);
        img.setAttribute("alt", launch.name);
        img.setAttribute("referrerpolicy", "no-referrer");

        img.setAttribute("style", "width: 280px; height: 300px; margin-left: 75px; margin-top: -90px"); 

        div.append(img);
        section__image.append(div);
    });
}