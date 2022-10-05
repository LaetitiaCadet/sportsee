import axios from 'axios'
import { USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE } from "./mockData";

export const getUserId = (userId) => {
    for ( let user of USER_MAIN_DATA){
        if (user.id == userId){
            return user.id
        }
    }
}

export const getUserFirstName = (userId) => {
    for ( let user of USER_MAIN_DATA){
        if (user.id == userId){
            return user.userInfos.firstName
        }
    }
}

export const getUserDailyActivity = (userId) => {
    let dataActivity = []

    for(let user of USER_ACTIVITY ){
        if(user.userId == userId){
            for(const data of user.sessions){       
                dataActivity.push({
                    day: data.day, 
                    kilogram: data.kilogram,
                    calories: data.calories 
                })
            }
        }
    }

    return dataActivity
}



