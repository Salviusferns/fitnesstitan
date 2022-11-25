import "./Homepage.css"
export default function Homepage(props){
    return(
            <div className="info">
                        <div className="imgtxt">
                            <header>
                                Go Hard Or Go Home!!
                            </header>
                            <p className="p1">
                                Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.
                                So dont waste your time and <strong><a href="/Membership">JOIN NOW</a></strong>
                            </p>
                        </div>
                        <a href="#more">
                            <button className="btnmore" >More About Gym</button> 
                        </a>
                        <h1 className="aboutus" id="more">
                                More About Us 
                        </h1>
                        <div className="imgtxt-2">
                                <h2>
                                    Why Should You Join GYM?
                                </h2>
                                <p>Joining a gym can help you stay motivated to exercise consistently. This is a great way to build muscle, lose weight, lower blood pressure, boost mental focus, and more. Over time, you can look better, feel better, and accomplish things you never thought possible!</p>    
                        </div>                    
            </div>
            
    )
}