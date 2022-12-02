import "./Homepage.css"
import Popups1 from "./popups/Popups1";
import Popups2 from "./popups/Popups2";
import Popups3 from "./popups/Popups3";
import Popups4 from "./popups/Popups4";
import Popups5 from "./popups/Popups5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Homepage(props){
    const navigate = useNavigate();
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
            <div className="info">
                        <div className="imgtxt">
                            <header>
                                Go Hard Or Go Home!!
                            </header>

                            <p className="p1">
                                Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.
                                So dont waste your time and <strong><a onClick={() => {navigate("/membership")}}>JOIN NOW</a></strong>
                            </p> 
                        </div>

                            <button className="btnmore"  onClick={() => {navigate("#more")}}>More About Gym</button>
                            
                        <div className="morepage">
                            <h1>More About Us</h1>
                                <div className="galery1">
                                    <div className="morepage-1">
                                        <div className="text">
                                            <h2><strong> Gym Rules For All Members</strong></h2>
                                            <ul>
                                                <li>
                                                    <p>Be nice to all people around you</p> <button onClick={() => setButtonPopup(true)}>More</button>
                                                    <Popups1 trigger={buttonPopup} setTrigger = {setButtonPopup}>
                                                        <h3 className="popup-text">hi</h3>
                                                    </Popups1>
                                                </li>
                                                <li>
                                                    <p>Put your phone down or go</p> <button onClick={() => setButtonPopup(true)}>More</button>
                                                    <Popups2 trigger={buttonPopup} setTrigger = {setButtonPopup}>
                                                        <h3 className="popup-text-1">bye</h3>
                                                    </Popups2>
                                                </li>
                                                <li>
                                                    <p>Be mindful of your surroundings</p> <button onClick={() => setButtonPopup(true)}>More</button>
                                                    <Popups3 trigger={buttonPopup} setTrigger = {setButtonPopup}>
                                                        <h3 className="popup-text-2">hi</h3>
                                                    </Popups3>
                                                </li>
                                                <li>
                                                    <p>Be careful with your personal items</p> <button onClick={() => setButtonPopup(true)}>More</button>
                                                    <Popups4 trigger={buttonPopup} setTrigger = {setButtonPopup}>
                                                        <h3 className="popup-text-2">hi</h3>
                                                    </Popups4>
                                                </li>
                                                <li>
                                                    <button onClick={() => setButtonPopup(true)}>More</button>
                                                    <Popups5 trigger={buttonPopup} setTrigger = {setButtonPopup}>
                                                        <h3>hi</h3>
                                                    </Popups5>
                                                </li>
                                                

                                            </ul>
                                        </div>
                                    </div>
                                <div className="morepage-2">
                                    <div className="text">
                                        <h2>Using equipments</h2>
                                    </div>
                                </div>
                            </div>
                        </div> 
            </div>
            
    )
}