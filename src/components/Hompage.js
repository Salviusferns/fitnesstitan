import "./Homepage.css"
import Popups1 from "./popups/Popups1";
import Popups2 from "./popups/Popups2";
import Popups3 from "./popups/Popups3";
import Popups4 from "./popups/Popups4";
import Popups5 from "./popups/Popups5";
import Popups6 from "./popups/Popups6";
import Popups7 from "./popups/Popups7";
import Popups8 from "./popups/Popups8";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Homepage(props){
    const navigate = useNavigate();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup3, setButtonPopup3] = useState(false);
    const [buttonPopup4, setButtonPopup4] = useState(false);
    const [buttonPopup5, setButtonPopup5] = useState(false);
    const [buttonPopup6, setButtonPopup6] = useState(false);
    const [buttonPopup7, setButtonPopup7] = useState(false);
    

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

                            <button className="btnmore"  onClick={() => {navigate("./membership")}}>Join Now</button>
                            
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
                                                        <h3>Leave other people alone, don’t disrupt other members workouts and be polite. 

Yes polite, a foreign concept in this day and age, but trust us it pays dividends. We all need a little bleeper sometimes after a heavy set, but keep swearing to a minimum and don’t scream it at the top of your voice! </h3> 
                                                    </Popups1>
                                                </li>
                                                <li>
                                                    <p>Put your phone down or go</p> <button onClick={() => setButtonPopup1(true)}>More</button>
                                                    <Popups2 trigger={buttonPopup1} setTrigger = {setButtonPopup1}>
                                                        <h3 className="popup-text-1">Put your phone down or go and do it somewhere else. The gym machines are not armchairs and holding up someone else’s workout while you play with your phone is simply not on. </h3>
                                                    </Popups2>
                                                </li>
                                                <li>
                                                    <p>Report issues quickly as Possible</p> <button onClick={() => setButtonPopup2(true)}>More</button>
                                                    <Popups3 trigger={buttonPopup2} setTrigger = {setButtonPopup2}>
                                                        <h3 className="popup-text-2">Please report any equipment malfunctions, personal injuries or specific concerns to the staff immediately. If it's out of hours you can use the emergency phones. </h3>
                                                    </Popups3>
                                                </li>
                                                <li>
                                                    <p>Be careful with your personal items</p> <button onClick={() => setButtonPopup3(true)}>More</button>
                                                    <Popups4 trigger={buttonPopup3} setTrigger = {setButtonPopup3}>
                                                        <h3 className="popup-text-2">They are your personal items not ours so we will not take responsibility for them. Bring a good solid lock and put them in a locker and you will be just fine. Reception is not a coat check, please do not leave bags/keys/phones there.</h3>
                                                    </Popups4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                <div className="morepage-2">
                                    <div className="text">
                                        <h2>Using equipments</h2>
                                        <ul>
                                                <li>
                                                    <p>Talking during a set</p> <button onClick={() => setButtonPopup4(true)}>More</button>
                                                    <Popups5 trigger={buttonPopup4} setTrigger = {setButtonPopup4}>
                                                        <h3>Do not talk to someone in the middle of a set. This is very distracting and they are probably not listening to you anyway. Don’t be offended if and when they ignore you. Wait until they're done.</h3> 
                                                    </Popups5>
                                                </li>
                                                <li>
                                                    <p>Rolling, rolling, rolling your dumbbles</p> <button onClick={() => setButtonPopup5(true)}>More</button>
                                                    <Popups6 trigger={buttonPopup5} setTrigger = {setButtonPopup5}>
                                                        <h3 className="popup-text-1">Don't let your dumbbells or barbells roll away from you as they can cause injury in others.</h3>
                                                    </Popups6>
                                                </li>
                                                <li>
                                                    <p>Dropping and banging wieght </p> <button onClick={() => setButtonPopup6(true)}>More</button>
                                                    <Popups7 trigger={buttonPopup6} setTrigger = {setButtonPopup6}>
                                                        <h3 className="popup-text-2">Don't drop weights or bang them together unnecessarily. Not only can you hurt your joints by banging and dropping weights, it is very distracting to others. </h3>
                                                    </Popups7>
                                                </li>
                                                <li>
                                                    <p>Spotting when someone is lifting</p> <button onClick={() => setButtonPopup7(true)}>More</button>
                                                    <Popups8 trigger={buttonPopup7} setTrigger = {setButtonPopup7}>
                                                        <h3 className="popup-text-2">If someone asks you for a spot, give it to them. If you don’t feel comfortable spotting them, e.g. they are using a very heavy weight, let them know.</h3>
                                                    </Popups8>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="More">
                                    <h1>FAQ</h1>
                                    <div className="keep">
                                        <h1>How long should my workouts be? </h1>
                                        <h3>Again, this depends on what works for your lifestyle. For adults, the World Health Organisation recommends at least 150-300 minutes of moderate-intensity aerobic physical activity, or at least 75-150 minutes each week of vigorous-intensity aerobic physical activity. </h3>
                                        <h1>Do I need to warm up before my workouts?</h1>
                                        <h3>You bet! We know it can be tempting to get straight into it, especially if you’re short on time, but a proper warm-up is really important. 

According to the Mayo Clinic, warming up and cooling down may help reduce your risk of injury and improve performance. A good warm-up prepares your body for activity, raises your body temperature and increases blood flow to your muscles.</h3>
                                        <h1>Should I do strength training, cardio or both? </h1>
                                        <h3>We recommend a mixture of cardio and strength training. Alternating between the two is a good way to find balance. Why both and not just one? Because you want to reap the benefits of each! 

According to the American Cancer Society, two to three strength-based workouts each week can result in significant health benefits, such as increased muscle mass, stronger bones, boosted metabolism, better posture, balance and joint flexibility. Research shows it also can boost heart health and have a positive impact on your mental health.</h3>
                                        <h1>Should I lift weights for strength training? </h1>
                                    </div>
                                </div>
                        </div> 
            </div>
            
    )
}