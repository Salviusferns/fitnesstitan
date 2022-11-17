import "./Contact-us.css";
export default function Contactus(props){
    return(
        <div className="Contact-us">
            <h1> Contact Us</h1>
            <div className="name">
                <input type= "text" id="input" placeholder="Enter Your Name"></input>
                <input type= "text" id="input" placeholder="Enter Your Surname"></input>
            </div>
            <input type= "text" id="input" placeholder="Enter Your Email"></input>
            <input type="submit" id ="btn"></input>







        </div>
    )
}