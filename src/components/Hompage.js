import "./Homepage.css"
import main from "../Images/main.jpg"
export default function Homepage(props){
    return(
        <div className="body">
            <div className="navbar">
                <ul>
                    <button className="btn">Home</button>
                    <button className="btn">Membership</button>
                    <button className="btn">Contact Us</button>
                    <button className="btn">Sign up/Login up</button>
                </ul>
            </div>
            <div className="info">
                <img className="mainpic" src={main} alt="Training"/>
                <header>Go Hard Or Go Home!!</header>
            </div>
        </div>
    )
}