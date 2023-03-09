import axios from 'axios'
 
const baseURL =  `http://localhost:3002/user/`;


/**
 * It takes a userId, and returns an object with the data from the four endpoints.
 * 
 * @param userId - the user id
 * @returns An object with the following properties:
 */
export const GetApiUsersData = async (userId) => {

    let endPoints = [
        baseURL + userId,
        baseURL + userId + '/activity' ,
        baseURL + userId + '/performance' ,
        baseURL + userId + '/average-sessions' ,
    ]

    const datas =  await Promise.all( endPoints.map((endpoint) => axios.get(endpoint)))
        .then(([{data: user},{data: activity},{data: performance},{data: averageSession} ]) => {
            return {user, activity, performance, averageSession}
        })

    return datas
}



/**
 * This function gets the user id from the api and returns it.
 * @param userId - The user's id
 * @returns The user.id
 */
export const getApiUserId = async (userId) => {
    const response = await GetApiUsersData(userId)
    const user = response.user.data
    return user.id
} 

/** 
 * It returns the first name of a user from an API.
 * @param userId - the user id
 * @returns A promise that resolves to the firstName of the user.
 */
export const getApiUserFirstName = async (userId) => {  
  const response = await GetApiUsersData(userId)
  const user = response.user.data
  return user.userInfos.firstName
}

/**
 * It returns the keyData property of the data property of the response object returned by the
 * axios.get() method
 * @param userId - a string
 * @returns An array of objects.
 */
export const getApiUserKeyData = async (userId) => {
    const response = await GetApiUsersData(userId)
    const user = response.user.data
    return user.keyData
}

/**
 * It takes a userId, makes a request to an API, and returns an array of objects with the user's
 * activity for each day of the week.
 * @param userId - the user id
 * @returns [
 *   {
 *     "day": 1,
 *     "kilogram": "0.0",
 *     "calories": "0.0"
 *   },
 *   {
 *     "day": 2,
 *     "kilogram": "0.0",
 *     "calories": "0.0"
 *   },
 *   {
 *     "day
 */
export const getApiUserDailyActivity = async (userId) => {
    let dataActivity = []
    const response = await GetApiUsersData(userId)
    const user = response.activity.data
    for ( let data of user.sessions){
        const dayInNumbers = new Date(data.day)
        const resultDay = dayInNumbers.getDay()
        
        dataActivity.push({
            day: resultDay, 
            kilogram: data.kilogram,
            calories: data.calories 
        })
    }
    return dataActivity
} 

/**
 * It takes a userId, makes a request to an API, and returns an array of objects with the value and
 * kind properties.
 * @param userId - the user id
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
 *   },
 *   {
 *     "value": "4",
 */
export const getApiUserPerformance = async (userId) => {
    let dataPerformance = []
    const response = await GetApiUsersData(userId)
    const user = response.performance.data
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

    return dataPerformance
}

/**
 * It takes a userId, makes a request to an API, and returns an array of objects with a single
 * property, todayScore, which is the result of rounding the response's todayScore property to the
 * nearest whole number.
 * @param userId - the user's id
 * @returns An array of objects.
 */
export const getApiUserScore = async (userId) => {
    let resultScore = []
    const response = await GetApiUsersData(userId)
    const user = response.user.data
    resultScore.push({
        todayScore: (user.todayScore * 100 || user.score * 100 )
    })

    return resultScore

}

/**
 * It takes a userId as a parameter, makes a request to an API, and returns an array of objects with
 * the day of the week and the average session length for that day.
 * @param userId - the user id
 * @returns An array of objects.
 */
export const getApiUserAverageSession = async (userId) => {
    let dataAverageSession = []
    let dayInLetters 

    const response = await GetApiUsersData(userId)
    const user = response.averageSession.data
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
    return dataAverageSession

}
