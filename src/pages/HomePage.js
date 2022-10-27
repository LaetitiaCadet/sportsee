import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        <Navbar></Navbar>

      </header>
      <main id="homePage-block" className='row'>
        <Sidebar></Sidebar>
        <section className='col-10 ms-4 mt-5'>
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