import Navbar from '../js/components/Navbar';
import Sidebar from '../js/components/Sidebar';
import { Link } from "react-router-dom";

/** 
 * It returns a div that contains a header, a main, and a footer. The header contains a Navbar
 * component, the main contains a Sidebar component and a section, and the footer contains a Footer
 * component
 * @returns A React component.
 */
const HomePage = () => {

  return (
    <div>
      <header className="App-header">
        <Navbar></Navbar>

      </header>
      <main id="homePage-block" className='row'>
        <Sidebar></Sidebar>
        <section className= 'col-sm-7 col-10 ms-4 mt-5'>
          <h1>Bienvenue sur l'application Sportsee</h1>
          <p>Choisissez un Utilisateur</p>
          <div>
              <ul>
                  <li>
                  <Link to={`/Profil/12`}><p>User 12</p></Link>
                  </li>
                  <li>
                  <Link to={`/Profil/18`}><p>User 18</p></Link>
                  </li>
              </ul>
          </div>
        </section>  
      </main>
    </div>
  )
}


export default HomePage;