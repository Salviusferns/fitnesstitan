import "./Homepage.css"
import Popups from "./Popups";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Homepage(props){
    const navigate = useNavigate();

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
                                        <h2><strong> Gym Rules For Using Equipments</strong></h2>
                                        <ul>
                                            <li>
                                                Put your weights back<button>More</button>
                                                <Popups trigger={true}>
                                                    <h3>hi</h3>
                                                </Popups>
                                            </li>
                                            <li>Keep the equipment where it belongs</li>
                                            <li>Be mindful of your surroundings</li>
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