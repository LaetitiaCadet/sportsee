import React from 'react';
import '../../scss/components/Sidebar.scss'
import meditation from '../../assets/icon-1.png'
import swimming from '../../assets/icon-2.png'
import bicycle from '../../assets/icon-3.png'
import dumbbells from '../../assets/icon-4.png'
import copyright from '../../assets/copyright.png'

const Sidebar = () => {
    return (
        <div className='wrapper d-flex flex-column col-1'>
            <nav className="sidebar">
                <div className='icons'>
                    <a className="nav-link my-2" href="#"><img src={meditation} alt="meditation" className="meditation" /></a>
                    <a className="nav-link my-2" href="#"><img src={swimming} alt="swimming" className="swimming" /></a>
                    <a className="nav-link my-2" href="#"><img src={bicycle} alt="bicycle" className="bicycle" /></a>
                    <a className="nav-link my-2" href="#"><img src={dumbbells} alt="dumbbells" className="dumbbells" /></a>
                </div>
                <img src={copyright} alt="copyright" className="copyright"></img>
            </nav>
        </div>

    )
}
   
export default Sidebar;