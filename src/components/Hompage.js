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
              
            </div>
            
    )
}