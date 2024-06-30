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

export const ImageLandpads = async (landpadsData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 

    landpadsData.forEach(landpad => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let img = document.createElement("img");
        img.setAttribute("src", landpad.images.large[0]); 
        img.setAttribute("alt", landpad.name); 
        img.setAttribute("referrerpolicy", "no-referrer");

        img.setAttribute("style", "width: 280px; height: 300px; margin-left: 75px; margin-top: -90px"); 

        div.append(img);
        section__image.append(div);
    });
};

export const imageShips = async (ship) => {
    console.log(ship);
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = "";

    let div = document.createElement("div");
    div.classList.add("carousel__item");

    let imageUrl = ship.image || "storage/img/icons/ships.gif"; 

    let img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("alt", ship.name); 
    img.setAttribute("referrerpolicy", "no-referrer");

    img.setAttribute("style", "width: 280px; height: 300px; margin-left: 75px; margin-top: -90px");

    div.append(img);
    section__image.append(div);
};

export const imageDragons = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenido existente

    flickr_images.forEach((val) => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        img.style.marginTop = "70px"; // Ajustar el margen superior a 70px
        img.style.width = "300px"; // Establecer el ancho a 300px
        img.style.height = "200px"; // Establecer la altura a 200px
        div.append(img);
        section__image.append(div);
    });

    // Inicializar Slick Slider solo si hay más de una imagen
    if (flickr_images.length > 1) {
        $(document).ready(function() {
            $(section__image).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            });
        });
    }
};

export const imageLaunchpads = async (launchpadsData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 
  
    launchpadsData.forEach(launchpad => {
      let div = document.createElement("div");
      div.classList.add("carousel__item");
  
      let img = document.createElement("img");
      if (launchpad.images && launchpad.images.large && launchpad.images.large.length > 0) {
        img.setAttribute("src", launchpad.images.large[0]); 
      } else {
        img.setAttribute("src", "default_image.jpg"); 
      }
      img.setAttribute("alt", launchpad.name); 
      img.setAttribute("referrerpolicy", "no-referrer");
      img.setAttribute("style", "width: 280px; height: 300px; margin-left: 75px; margin-top: -90px");
  
      div.append(img);
      section__image.append(div);
    });
  }