import { USER_AVERAGE_SESSIONS, USER_MAIN_DATA } from "../js/mock/mockData";
import { useLocation} from 'react-router-dom';
import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';

const ProfilPage = () => {
  const urlId = useLocation().search
  const id = new URLSearchParams(urlId).get('id')
  console.log(id)

  let userData = USER_MAIN_DATA.filter( user => user.id == id)
    console.log(userData)

  return (
      <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </header>
      <main className= "mx-auto">
        <section className="">
            {
              userData.map(user => <h1 key={id}>Bonjour <span>{user.userInfos.firstName}</span></h1>)
            }
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
      </main>
    </div>
  )

}



export default ProfilPage;