import "./membership.css"
export default function Membership(props){
    return(
        <div className="table">
            <ul className="list">
                
                <li className="li1">
                    <h2>Silver</h2>
                    <p>£17.99/pm per person</p>
                    <hr></hr>
                    <p>Access to Gym</p>
                    <p>Access to Free Training Videos</p>
                    <p>Free Gym Classes</p>
                    <p><s> Bring A Friend</s></p>
                    <p><s>Access to Meal Planing</s></p>
                    <p><s>Access to Personalised Videos</s></p>
                    <p><s>Fitness/body composition tracking</s></p>
                    <div className="btn-select">
                        <a href="/Homepage">
                            <li>Select</li>
                        </a>
                    </div>
                </li>
              
                <li className="li2"><h2>Gold</h2>
                
                <p>£24.99/pm per person</p>
                    <hr></hr>
                    <p>Access to Gym</p>
                    <p>Access to Free Training Videos</p>
                    <p>Free Gym Classes</p>
                    <p> Bring A Friend</p>
                    <p><s>Access to Meal Planing</s></p>
                    <p><s>Access to Personalised Videos</s></p>
                    <p><s>Fitness/body composition tracking</s></p>
                    <div className="btn-select">
                        <a href="/Homepage">
                            <li>Select</li>
                        </a>
                    </div></li>

                <li><h2>Platnuim</h2></li>
            </ul>
            <div className="black"></div>
        </div>
    )
}