import {getUserFirstName, getUserDailyActivity} from "../js/mock/mockApi";
import Activity from "../js/components/charts/Activity";
import {useLocation} from 'react-router-dom';
import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';

const ProfilPage = () => {
  const urlId = useLocation().search
  const id = new URLSearchParams(urlId).get('id')

  let userFirstName = getUserFirstName(id)
  let dataActivity = getUserDailyActivity(id)
 

  return (
      <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </header>
      <main className= "mx-auto">
        <section className="Title">
            <h1 key={id}>Bonjour <span>{userFirstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
        <section>
            <Activity
             data = {dataActivity}
            />
        </section>
      </main>
    </div>
  )

}



export default ProfilPage;