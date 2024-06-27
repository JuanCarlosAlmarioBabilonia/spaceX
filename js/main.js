// extraer nombres 

// export const getAllRocketsName = async() => {
//     let config = {
//         headers: {"content-type": "application/json"},
//         method:"POST",
//         body: JSON.stringify({
//             "options": {
//                 "select": {
//                 "name": 1
//                 }
//             }
//         })
//     }
//     let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
//     let {docs} = await res.json();
//     let rocketNames = docs.map(doc => doc.name);
//     return rocketNames;
// }

// console.log(await(getAllRocketsName()))

// const displayRocketNames = async () => {
//     const rocketList = document.querySelector('#rockets');
    
//     try {
//         const rocketNames = await getAllRocketsName();
        
//         rocketNames.forEach(name => {
//             const li = document.createElement('li');
//             li.textContent = name;
//             rocketList.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error al obtener nombres de cohetes:', error);
//     }
// };

// displayRocketNames();


// // extraer info 

// export const getAllRocketsInfo = async() => {
//     let config = {
//         headers: {"content-type": "application/json"},
//         method:"POST",
//         body: JSON.stringify({
//             "options": {
//                 "select": {
//                 "description": 1
//             }
//             }
//         })
//     }
//     let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
//     let {docs} = await res.json();
//     let rocketInfo = docs.map(doc => doc.description);
//     return rocketInfo;
// }

// console.log(await(getAllRocketsInfo()))

// const displayRocketInfo = async () => {
//     const rocketList = document.querySelector('#info');
    
//     try {
//         const rocketInfo = await getAllRocketsInfo();
        
//         rocketInfo.forEach(description => {
//             const li = document.createElement('li');
//             li.textContent = description;
//             rocketList.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error al obtener nombres de cohetes:', error);
//     }
// };

// displayRocketInfo();

// extraer name e info 

export const getAllRocketsNameInfo = async() => {
    let config = {
        headers: {"content-type": "application/json"},
        method:"POST",
        body: JSON.stringify({
            "options": {
                "select": {
                "name": 1,
                "description": 1,
                "first_flight":1,
                "company":1,
                "type":1,
                "cost_per_launch": 1
            }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs} = await res.json();
    let rocketInfo = docs.map(doc => ({
        name: doc.name,
        info: doc.description,
        flight: doc.first_flight,
        company: doc.company,
        type: doc.type,
        cost: doc.cost_per_launch
    }));
    return rocketInfo;
}
console.log(await(getAllRocketsNameInfo()))

const displayRocketNamesAndInfo = async () => {
    const rocketList = document.getElementById('mixed');
    try {
        const rocketData = await getAllRocketsNameInfo();      
        rocketData.forEach(({ name, info, flight, company, type, cost}) => {
            //name
            const rocketLi = document.createElement('h1');
            rocketLi.textContent = name;

            //titulo1
            const infor = document.createElement('h4');
            infor.textContent = "INFORMATION";

            //informacion
            const infoPara = document.createElement('p');
            infoPara.textContent = info;

            //titulo2
            const infor2 = document.createElement('h4');
            infor2.textContent = "FIRST FLIGHT";

            //first_flight
            const vuelo = document.createElement('p');
            vuelo.textContent = flight;

            //titulo3
            const infor3 = document.createElement('h4');
            infor3.textContent = "COMPANY";

            //company
            const compañia = document.createElement('p');
            compañia.textContent = company;

            //titulo4
            const infor4 = document.createElement('h4');
            infor4.textContent = "TYPE";

            //type
            const tipo = document.createElement('p');
            tipo.textContent = type;

            //titulo5
            const infor5 = document.createElement('h4');
            infor5.textContent = "COST PER LAUNCH";

            //costo
            const costo = document.createElement('p');
            costo.textContent = cost;
            
            rocketList.appendChild(rocketLi);
            rocketList.appendChild(infor);
            rocketList.appendChild(infoPara);
            rocketList.appendChild(infor2);
            rocketList.appendChild(vuelo);
            rocketList.appendChild(infor3);
            rocketList.appendChild(compañia);
            rocketList.appendChild(infor4);
            rocketList.appendChild(tipo);
            rocketList.appendChild(infor5);
            rocketList.appendChild(costo);
            
        });
    } catch (error) {
        console.error('Error al obtener datos de cohetes:', error);
    }
};
displayRocketNamesAndInfo();




