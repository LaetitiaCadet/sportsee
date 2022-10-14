import {getUserFirstName, getUserDailyActivity, getUserAverageSession, getUserPerformance, getUserKeyData, getUserScore} from "../js/mock/mockApi";
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

  let userFirstName = getUserFirstName(id)
  let dataActivity = getUserDailyActivity(id)
  let dataAverageSession = getUserAverageSession(id)
  let dataPerformance = getUserPerformance(id)
  let dataKeyData = getUserKeyData(id)
  let dataTodayScore = getUserScore(id)

  console.log(dataTodayScore)


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
                 data = {dataActivity}
                /> 
                <div className="row mt-4">
                  <div className="col-4">
                    <AverageSession
                      data = {dataAverageSession}
                    />
                  </div>
                  <div className="col-4">
                    <Performance
                        data = {dataPerformance}
                      />
                  </div>
                  <div className="col-4">
                    <TodayScore
                        data = {dataTodayScore}
                      />
                  </div>
                </div>    
              </div>
              <div className="col-3">
                <KeyData
                  calorieCount={dataKeyData.calorieCount}
                  proteinCount={dataKeyData.proteinCount}
                  carbohydrateCount={dataKeyData.carbohydrateCount}
                  lipidCount={dataKeyData.lipidCount}  
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  )

}



export default ProfilPage;