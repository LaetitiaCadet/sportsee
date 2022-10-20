import React, {useState, useEffect} from "react"

import {getUserFirstName, getUserDailyActivity, getUserAverageSession, getUserPerformance, getUserKeyData, getUserScore} from "../js/mock/mockApi";
import {getApiUserFirstName, getApiUserAverageSession, getApiUserDailyActivity, getApiUserKeyData, getApiUserPerformance, getApiUserScore } from "../js/Api/api";
import Activity from "../js/components/charts/Activity";
import AverageSession from "../js/components/charts/AverageSession";
import Performance from "../js/components/charts/Performance";
import TodayScore from "../js/components/charts/TodayScore";
import KeyData from "../js/components/KeyData";
import {useLocation} from 'react-router-dom';
import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';


  

const ProfilPage = () => {
  const urlId = useLocation().search
  const id = new URLSearchParams(urlId).get('id')

  const [userFirstName, setUserFirstName] = useState([]);
  const [activity, setActivity] = useState([]);
  const [averageSession, setAverageSession] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [keyData, setKeyData] = useState([]);
  const [todayScore, setTodayScore] = useState([])

  // if (process.env.REACT_APP_MODE){
  //    console.log(process.env.REACT_APP_MODE)
  // }

// data API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFirstName = await getApiUserFirstName(id) 
        setUserFirstName(dataFirstName)
        const dataActivity =  await getApiUserDailyActivity(id)
        setActivity(dataActivity)
        const dataAverageSession = await getApiUserAverageSession(id)
        setAverageSession(dataAverageSession)
        const dataPerformance = await getApiUserPerformance(id)
        setPerformance(dataPerformance)
        const dataKeyData = await getApiUserKeyData(id)
        setKeyData(dataKeyData)
        const dataTodayScore = await getApiUserScore(id)
        setTodayScore(dataTodayScore)
      } catch(err) {
        console.log(err)
      }



    }
    fetchData()

  },[])



  // data mockedAPI
  // let dataAverageSession = getUserAverageSession(id)
  // let dataPerformance = getUserPerformance(id)
  // let dataKeyData = getUserKeyData(id)
  // let dataTodayScore = getUserScore(id)

  //Log TEST
  // console.log(userFirstName)
  // console.log(activity)
  // console.log(averageSession)
  // console.log(performance)
  // console.log(keyData)
  console.log(todayScore)


  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </header>
      <main id="charts-block">
        <section className="Title">
            <h1 key={id}>Bonjour <span>{userFirstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
        <section  className="container">
          <div className="row">
              <div className="col-9">
                <Activity
                 data = {activity}
                /> 
                <div className="row mt-4">
                  <div className="col-4">
                    <AverageSession
                      data = {averageSession}
                    />
                  </div>
                  <div className="col-4">
                    <Performance
                        data = {performance}
                      />
                  </div>
                  <div className="col-4">
                    <TodayScore
                        data = {todayScore}
                      />
                  </div>
                </div>    
              </div>
              <div className="col-3">
                <KeyData
                  calorieCount={keyData.calorieCount}
                  proteinCount={keyData.proteinCount}
                  carbohydrateCount={keyData.carbohydrateCount}
                  lipidCount={keyData.lipidCount}  
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  )

}



export default ProfilPage;