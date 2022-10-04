import '../js/mock/mockData'
import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';
import { USER_MAIN_DATA } from '../js/mock/mockData';
import TestName from '../js/components/TestName';


const HomePage = () => {
  const ids = []
  const users = USER_MAIN_DATA.forEach(user => ids.push(user))

  console.log(ids)
  return (
    <div>
      <header className="App-header">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </header>
      <main className= "mx-auto">
        <section>
          <h1>Bienvenue sur l'application Sportsee</h1>
          <p>Choisissez un Utilisateur</p>

            {ids.map(user => <p>
              <TestName
                key={user.id}
                id={user.id}
              />
              </p>)}  
        </section>  
      </main>


    </div>
  )
}


export default HomePage;