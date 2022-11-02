/* It's importing the useState & useEffect hooks from the React library. */
import React, {useState, useEffect} from "react"
/* It's importing the useParams & Navigate hook from the react-router-dom library. */
import {useParams, Navigate, useRouteMatch} from 'react-router-dom';

//Data Api & Mocked data Api
import {getUserFirstName, getUserDailyActivity, getUserAverageSession, getUserPerformance, getUserKeyData, getUserScore} from "../js/mock/mockApi";
import {getApiUserFirstName, getApiUserAverageSession, getApiUserDailyActivity, getApiUserKeyData, getApiUserPerformance, getApiUserScore } from "../js/Api/api";
import "../js/Api/api"

//Components
import Activity from "../js/components/charts/Activity";
import AverageSession from "../js/components/charts/AverageSession";
import Performance from "../js/components/charts/Performance";
import TodayScore from "../js/components/charts/TodayScore";
import KeyData from "../js/components/KeyData";
import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';



/**
 * The function is called when the component is mounted. 
 * It checks the environment variable and if it's in development mode, it uses the mocked data. 
 * If it's in production mode, it uses the API data. 
 * 
 * The data is then passed to the child components.
 * @returns The return is a function that is being called.
 */
const ProfilPage = () => {
  let params = useParams() 
  const userId = params.id

  const [userFirstName, setUserFirstName] = useState([]);
  const [activity, setActivity] = useState([]);
  const [averageSession, setAverageSession] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [keyData, setKeyData] = useState([]);
  const [todayScore, setTodayScore] = useState([])



  useEffect(() => {
    console.log(userId)   
    const fetchData = async () => {

      try {
        const dataFirstName = await getApiUserFirstName(userId) 
        setUserFirstName(dataFirstName)
        const dataActivity =  await getApiUserDailyActivity(userId)
        setActivity(dataActivity)
        const dataAverageSession = await getApiUserAverageSession(userId)
        setAverageSession(dataAverageSession)
        const dataPerformance = await getApiUserPerformance(userId)
        setPerformance(dataPerformance)
        const dataKeyData = await getApiUserKeyData(userId)
        setKeyData(dataKeyData)
        const dataTodayScore = await getApiUserScore(userId)
        setTodayScore(dataTodayScore)
      } catch(err) {
        console.log(err)
      }
    }


    if (process.env.NODE_ENV === "development"){
        console.log('MockApi')
       try {

        const dataFirstName = getUserFirstName(userId)
        setUserFirstName(dataFirstName)
        const dataActivity = getUserDailyActivity(userId)
        setActivity(dataActivity)
        const dataAverageSession =  getUserAverageSession(userId)
        setAverageSession(dataAverageSession)
        const dataPerformance =  getUserPerformance(userId)
        setPerformance(dataPerformance)
        const dataKeyData =  getUserKeyData(userId)
        setKeyData(dataKeyData)
        const dataTodayScore =  getUserScore(userId)
        setTodayScore(dataTodayScore)
       } catch(err) {
         console.log(err)

       }
   } else if (process.env.NODE_ENV === 'production') {
      console.log('DataApi')
      fetchData()
    }

  },[])


  return (
    

    <div className="App">
          {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <main id="charts-block" className="row">
        <Sidebar></Sidebar>
        <div className="col-md-10 mt-5">
          <section  className="container">
          <section className="Title">
              <h1 key={userId}>Bonjour <span>{userFirstName}</span></h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </section>
            <div className="row mt-4">
                <div className="col-xl-9 col-lg-12">
                  <Activity
                  data = {activity}
                  /> 
                  <div className="row mt-4">
                    <div className="col-xl-4 col-lg-12 my-4">
                      <AverageSession
                        data = {averageSession}
                      />
                    </div>
                    <div className="col-xl-4 col-lg-12 my-4">
                      <Performance
                          data = {performance}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-12 my-4">
                      <TodayScore
                          data = {todayScore}
                        />
                    </div>
                  </div>    
                </div>
                <div className="col-xl col-lg">
                  <KeyData
                    calorieCount={keyData.calorieCount}
                    proteinCount={keyData.proteinCount}
                    carbohydrateCount={keyData.carbohydrateCount}
                    lipidCount={keyData.lipidCount}  
                  />
                </div>
            </div>
          </section>
        </div>

      </main>
    </div>
  )

}



export default ProfilPage;