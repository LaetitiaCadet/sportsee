import React from 'react';
import '../../scss/components/Sidebar.scss'
import meditation from '../../assets/icon-1.png'
import swimming from '../../assets/icon-2.png'
import bicycle from '../../assets/icon-3.png'
import dumbbells from '../../assets/icon-4.png'

const Sidebar = () => {
    return (
        <nav className="nav sidebar flex-column justify-content-center align-items-center">
            <a className="nav-link" href="#"><img src={meditation} alt="meditation" className="meditation" /></a>
            <a className="nav-link" href="#"><img src={swimming} alt="swimming" className="swimming" /></a>
            <a className="nav-link" href="#"><img src={bicycle} alt="bicycle" className="bicycle" /></a>
            <a className="nav-link" href="#"><img src={dumbbells} alt="dumbbells" className="dumbbells" /></a>
        </nav>
    )
}
 
export default Sidebar;