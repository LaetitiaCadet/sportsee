
import { USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE } from "./mockData";


/**
 * It returns the userId if the userId is found in the USER_MAIN_DATA array.
 * @param userId - the id of the user you want to get the data for
 * @returns The userId
 */
export const getUserId = (userId) => {
    for ( let user of USER_MAIN_DATA){
        if (user.id == userId){
            return user.id
        }
    }
}

/**
 * It takes a userId and returns the firstName of the user with that userId.
 * @param userId - the id of the user
 * @returns The firstName of the user with the userId that was passed in.
 */
export const getUserFirstName = (userId) => {
    for ( let user of USER_MAIN_DATA){
        if (user.id == userId){
            return user.userInfos.firstName
        }
    }
}

/**
 * It takes a userId and returns an array of objects containing the day, kilogram, and calories for
 * each session of that user.
 * @param userId - the user id
 * @returns An array of objects.
 */
export const getUserDailyActivity = (userId) => {
    let dataActivity = []

    for(let user of USER_ACTIVITY ){
        if(user.userId == userId){
            for(const data of user.sessions){   
                switch (data.day) {
                    case "2020-07-01":
                            data.day = 1
                        break;
                    case "2020-07-02":
                            data.day = 2
                        break;
                    case "2020-07-03":
                            data.day = 3
                        break;
                    case "2020-07-04":
                            data.day = 4
                         break;
                    case "2020-07-05":
                        data.day = 5
                        break;
                    case "2020-07-06":
                        data.day = 6
                            break;
                    case "2020-07-07":
                    data.day = 7
                        break;
                
                    default:
                        break;
                }    
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

/**
 * It takes a userId as a parameter and returns an array of objects with the day of the week and the
 * session length for that day.
 * @param userId - the id of the user
 * @returns An array of objects.
 */
export const getUserAverageSession = (userId) => {
    let dataAverageSession = []
    let dayInLetters

    for(let user of USER_AVERAGE_SESSIONS ){
        if(user.userId == userId){
            for(const data of user.sessions){   
                switch (data.day) {
                    case 1:
                            dayInLetters = "L"
                        break;
                    case 2:
                            dayInLetters = "M"
                        break;
                    case 3:
                            dayInLetters = "M"
                        break;
                    case 4:
                            dayInLetters = "J"
                         break;
                    case 5:
                        dayInLetters = "V"
                        break;
                    case 6:
                        dayInLetters = "S"
                            break;
                    case 7:
                    dayInLetters = "D"
                        break;
                
                    default:
                        break;
                }    
                dataAverageSession.push({
                    day: dayInLetters, 
                    sessionLength: data.sessionLength
                })
            }
        }
    }

    return dataAverageSession 
}

/**
 * It takes a userId and returns an array of objects with the value and kind properties.
 * @param userId - 1
 * @returns [
 *   {
 *     "value": "1",
 *     "kind": "1"
 *   },
 *   {
 *     "value": "2",
 *     "kind": "2"
 *   },
 *   {
 *     "value": "3",
 *     "kind": "3"
 */
export const getUserPerformance = (userId) => {
    let dataPerformance = []
    for( let user of USER_PERFORMANCE){
        if(user.userId == userId){
            for(const data of user.data){ 
                switch (data.kind) {
                    case 1:
                            data.kind = 'Intensité'
                        break;
                    case 2:
                            data.kind = 'Vitesse'
                        break;
                    case 3:
                            data.kind = 'Force'
                        break;
                    case 4:
                            data.kind = 'Endurance'
                        break;
                    case 5:
                            data.kind = 'Energie'
                        break;
                    case 6:
                            data.kind = "Cardio"
                            break;
                    
                    default:
                        break;
                }
                dataPerformance.push({
                    value: data.value, 
                    kind: data.kind

                })
            }
        }
    }

    return dataPerformance
}

/**
 * It takes a userId and returns an array of objects with a property called todayScore.
 * @param userId - the id of the user
 * @returns An array of objects with a single key/value pair.
 */
export const getUserScore = (userId) => {
    let resultScore = []
    for ( let user of USER_MAIN_DATA){
        if (user.id == userId){
             resultScore.push({
                  todayScore: Math.round(user.todayScore * 100)
            })
           
        }
    }
    return resultScore
}

 /**
 * It returns the keyData of the user with the given userId.
 * @param userId - the user id of the user you want to get the key data for
 * @returns The keyData object for the user with the id of userId.
 */
export const getUserKeyData = (userId) => {
    for ( let user of USER_MAIN_DATA){
        if (user.id == userId){
            return  user.keyData
        }
    }
}
