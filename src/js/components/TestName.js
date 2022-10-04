import { Link } from "react-router-dom";


function TestName ({id}){
   return (
    <div>
        <ul>
            <li key={id}>
             <Link to={`/Profil?id=${id}`}><p>User{id}</p></Link>
            </li>
        </ul>
    </div>

   )
}

export default TestName