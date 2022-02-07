//1) создать интерфейс на основе этого объекта:

import {IUser} from "./interface/user.interface";

const user: IUser = {
    mission_name: 'Starlink-15 (v1.0)',
    launch_date_local: "2020-10-24T11:31:00-04:00",
    launch_site: {
        site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40",
    },
    links: {
        article_link: null,
        video_link: "https://youtu.be/J442-ti-Dhg"
    },
    rocket: {
        rocket_name: "Falcon 9",
        first_stage: {
            cores: [{
                flight: 7,
                core: {
                    reuse_count: 6,
                    status: "unknown"
                },
            }],
        },
        second_stage: {
            payloads: [{
                payload_type: "Satellite",
                payload_mass_kg: 15400,
                payload_mass_lbs: 33951.2
            }],
        },
    },
};


// 2) протипизировать функции:

const user1:{name:string, age:number, gender:string} = {name: "Max", age: 18, gender:'male'}


const sum = (a:number, b:number) => {
    return a+b
}

const showSum = (a:number, b:number) => {
    console.log(a + b);
}

const incAge = (someUser:number, inc:number) => {

    someUser+=inc
    return someUser
}

console.log(sum(1, 2));

showSum(2,3);

incAge(user1.age, 2);
