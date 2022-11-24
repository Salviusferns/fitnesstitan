import "./Homepage.css"
import main from "../Images/main.jpg"
import girl from "../Images/girl.avif"
export default function Homepage(props){
    return(
            <div className="info">
                <img className="mainpic" src={main} alt="Training"/>
                <header>Go Hard Or Go Home!!</header>
                <p className="p1">Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.
                So dont waste your time and <strong><a href="/Membership">JOIN NOW</a></strong></p>
                <a href="#hi"><button className="btnmore" >More About Gym</button></a>
                <h2 className="h1">Why Should You Join GYM?</h2>
                <p className="p2">Joining a gym can help you stay motivated to exercise consistently. This is a great way to build muscle, lose weight, lower blood pressure, boost mental focus, and more. Over time, you can look better, feel better, and accomplish things you never thought possible!</p>
                <h1 className="h2" id="hi">More About Us</h1>
                <img className="girlpic" src={girl} alt="Girl Training with dumbles"/>
            </div>
            
    )
}