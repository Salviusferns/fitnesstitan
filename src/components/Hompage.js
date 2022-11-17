import "./Homepage.css"
import main from "../Images/main.jpg"
export default function Homepage(props){
    return(
        <div className="body">
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Membership</li>
                    <li>Contact Us</li>
                    <li>Sign up/Login up</li>
                    <li></li>
                </ul>
            </div>
            <div className="info">
                <img src={main} alt="Training"/>
            </div>
        </div>
    )
}