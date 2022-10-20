import axios from 'axios'


const baseURL =  `http://localhost:3001/user/`;

/**
 * It returns the first name of a user from an API.
 * @param userId - the user id
 * @returns A promise that resolves to the firstName of the user.
 */
export const getApiUserFirstName = async (userId) => {  
 const response  = await axios.get(baseURL + userId)
 const user = await response.data.data
  return user.userInfos.firstName
}

/**
 * It returns the keyData property of the data property of the response object returned by the
 * axios.get() method
 * @param userId - a string
 * @returns An array of objects.
 */
export const getApiUserKeyData = async (userId) => {
   const response = await axios.get(baseURL + userId )
   const user = await response.data.data  
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
    const response = await axios.get(baseURL + userId + '/activity')
    const user = await response.data.data
    for ( let data of user.sessions){
        const dayInNumbers = new Date(data.day)
        const resultDay = dayInNumbers.getDay()
        
        dataActivity.push({
            day: resultDay, 
            kilogram: data.kilogram,
            calories: data.calories 
        })
    }
    console.log(dataActivity)
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
    let kindItems
    const response = await axios.get(baseURL + userId + '/performance')
    const user = await response.data.data;
    console.log(user)
    for(const data of user.data){ 
        switch (data.kind) {
            case 1:
                    kindItems = user.kind[1]
                break;
            case 2:
                    kindItems = user.kind[2]
                break;
            case 3:
                    kindItems = user.kind[3]
                break;
            case 4:
                    kindItems = user.kind[4]
                 break;
            case 5:
                kindItems = user.kind[5]
                break;
            case 6:
                kindItems = user.kind[6]
                    break;
        
            default:
                break;
        }
        dataPerformance.push({
            value: data.value, 
            kind: kindItems

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
    let dataScore = []
    const response = await axios.get(baseURL + userId)
    const user = await response.data.data ;
    dataScore.push({
            todayScore: Math.round(user.todayScore * 100)
    })
    console.log(dataScore)
    return dataScore
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

    const response = await axios.get(baseURL + userId + '/average-sessions')
    const user = await response.data.data
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
    console.log(dataAverageSession)
    return dataAverageSession

}
