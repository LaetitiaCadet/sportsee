import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';
import { Link } from "react-router-dom";

const HomePage = () => {
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
          <div>
              <ul>
                  <li>
                  <Link to={`/Profil?id=12`}><p>User 12</p></Link>
                  </li>
                  <li>
                  <Link to={`/Profil?id=18`}><p>User 18</p></Link>
                  </li>
              </ul>
          </div>
        </section>  
      </main>
    </div>
  )
}


export default HomePage;