import axios from 'axios'
import { useParams } from "react-router-dom";
import { USER_AVERAGE_SESSIONS, USER_MAIN_DATA } from "./mockData";

let userId = useParams


export const getUserId = ({userId}) => {
    USER_MAIN_DATA.forEach(user =>  {
        if(user.id == userId){
                return user.id
        }
    })
}


export default ModelApi; 