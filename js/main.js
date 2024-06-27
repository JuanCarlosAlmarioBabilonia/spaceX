// extraer name e info 

export const getAllRocketsAllInfo = async() => {
    let config = {
        headers: {"content-type": "application/json"},
        method:"POST",
        body: JSON.stringify({
            "options": {
                "query":{},
                "options":{
                  "select": {
                      "name": 1,
                      "description": 1,
                      "first_flight":1,
                      "company":1,
                      "type":1,
                      "cost_per_launch": 1,
                      "height":{
                        "meters":1,
                        "feet":1
                      },
                      "diameter":{
                        "meters":1,
                        "feet":1
                      },
                      "mass":{
                        "kg":1,
                        "lb":1
                      },
                    "second_stage":{
                    "payloads":{
                        "composite_fairing":{
                        "height":{
                            "meters":1,
                            "feet":1
                        },
                        "diameter":{
                            "meters":1,
                            "feet":1
                        }
                        }
                    }
                    },
                    "engines":{
                        "number":1,
                        "type":1,
                        "version":1,
                        "engine_loss_max":1,
                        "propellant_1":1,
                        "propellant_2":1
                    },
                    "payload_weights":{
                        "kg":1,
                        "lb":1
                    }
                }
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
        cost: doc.cost_per_launch,
        meters:doc.height.meters,
        feet:doc.height.feet,
        meters1:doc.diameter.meters,
        feet1:doc.diameter.feet,
        kg:doc.mass.kg,
        lb:doc.mass.lb,
        meters2:doc.second_stage.payloads.composite_fairing.height.meters,
        feet2: doc.second_stage.payloads.composite_fairing.height.feet,
        meters3: doc.second_stage.payloads.composite_fairing.diameter.meters,
        number:doc.engines.number,
        type2:doc.engines.type,
        version:doc.engines.version,
        engine:doc.engines.engines_loss_max,
        p1:doc.engines.propellant_1,
        p2:doc.engines.propellant_2,
        kg1:doc.payload_weights.kg,
        lb1:doc.payload_weights.lb,
    }));
    return rocketInfo;
}
console.log(await(getAllRocketsAllInfo()))

const displayRocketsAllInfo = async () => {
    const rocketList = document.getElementById('mixed');
    try {
        const rocketData = await getAllRocketsAllInfo();      
        rocketData.forEach(({ name, info, flight, company, type, cost, meters, feet, meters1, feet1, kg, lb, meters2, feet2, meters3, number, type2, version, engine, p1, p2, kg1, lb1}) => {
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

            //titulo6
            const infor6 = document.createElement('h4');
            infor6.textContent = "HEIGHT";

            //meters
            const mRocket = document.createElement('p');
            mRocket.textContent = `METERS: ${meters} m`;

            //meters
            const fRocket = document.createElement('p');
            fRocket.textContent = `FEET: ${feet} ft`;

            //titulo7
            const infor7 = document.createElement('h4');
            infor7.textContent = "DIAMETER";

            //meters1
            const mDRocket = document.createElement('p');
            mDRocket.textContent = `METERS: ${meters1} m`;

            //feet1
            const fDRocket = document.createElement('p');
            fDRocket.textContent = `FEET: ${feet1} ft`;

            //titulo8
            const infor8 = document.createElement('h4');
            infor8.textContent = "MASS";

            //meters1
            const mMRocket = document.createElement('p');
            mMRocket.textContent = `METERS: ${kg} m`;

            //feet1
            const fMRocket = document.createElement('p');
            fMRocket.textContent = `FEET: ${lb} ft`;
            
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
            rocketList.appendChild(infor6);
            rocketList.appendChild(mRocket);
            rocketList.appendChild(fRocket);
            rocketList.appendChild(infor7);
            rocketList.appendChild(mDRocket);
            rocketList.appendChild(fDRocket);
            rocketList.appendChild(infor8);
            rocketList.appendChild(mMRocket);
            rocketList.appendChild(fMRocket);
            
        });
    } catch (error) {
        console.error('Error al obtener datos de cohetes:', error);
    }
};
displayRocketsAllInfo();




