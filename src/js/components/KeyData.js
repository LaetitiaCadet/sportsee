import Calories from '../../assets/calories-icon.png'
import Proteines from '../../assets/protein-icon.png'
import Glucides from '../../assets/carbs-icon.png'
import Lipides from '../../assets/fat-icon.png'


const KeyData = ({calorieCount, proteinCount, carbohydrateCount, lipidCount}) => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-xl-12 col-lg-5 mx-lg-4 d-flex align-items-center justify-content-around keydata-item">
                <img src={Calories} alt="FireIcon" className="keyData-icon" />
                <div className='title'>
                    <h5>{calorieCount}KCal</h5>
                    <p>Calories</p>
                </div>
            </div>
            <div className="col-xl-12 col-lg-5 mx-lg-4 d-flex align-items-center justify-content-around keydata-item">
                <img src={Proteines} alt="ChickenIcon" className="keyData-icon" />
                <div className='title'>
                    <h5>{proteinCount}g</h5>
                    <p>Proteines</p>
                </div>  
            </div>
            <div className="col-xl-12 col-lg-5 mx-lg-4 d-flex align-items-center justify-content-around keydata-item">
                <img src={Glucides} alt="AppleIcon" className="keyData-icon" />
                <div className='title'>
                    <h5>{carbohydrateCount}g</h5>
                    <p>Glucides</p>
                </div>  
             
            </div>
            <div className="col-xl-12 col-lg-5 mx-lg-4 d-flex align-items-center justify-content-around keydata-item">
                <img src={Lipides} alt="BurgerIcon" className="keyData-icon" />
                <div className='title'>
                    <h5>{lipidCount}g</h5>
                    <p>Lipides</p>
                </div>             
            </div>
        </div>
    </div>
    )
}


export default KeyData;