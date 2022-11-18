import "./Homepage.css"
import {Link} from "react-router-dom"
import main from "../Images/main.jpg"
export default function Homepage(props){
    return(
        <div className="body">
            <div className="navbar">
                <ul>
                    <button className="btn" component={Link} to="www.google.com" >Home</button>
                    <button className="btn">Membership</button>
                    <button className="btn">Contact Us</button>
                    <button className="btn">Sign up/Login up</button>
                </ul>
            </div>
            <div className="info">
                <img className="mainpic" src={main} alt="Training"/>
                <header>Go Hard Or Go Home!!</header>
                <p>Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.
So dont waste your time and <strong>JOIN NOW</strong></p>
                <button className="btnmore">More About Gym</button>
            </div>
        </div>
    )
}