import { Outlet } from "react-router-dom"
import Mealsnav from "./Meals-navbar"

export default function Meals(props){
    return(
        <div className="container">
            <Mealsnav/>
            <Outlet />
            
        </div>
    )
}