import "./membership.css"
export default function Membership(props){
    return(
        <div className="table">
            <ul className="list">
                
                <li className="li1">
                    <h2>Silver</h2>
                    <p className="price">£17.99/pm per person</p>
                    <hr></hr>
                    <p>Access to Gym</p>
                    <p>Access to Free Training Videos</p>
                    <p>Free Gym Classes</p>
                    <p className="red">Bring A Friend</p>
                    <p className="red">Access to Meal Planing</p>
                    <p className="red">Access to Personalised Videos</p>
                    <p className="red">Fitness/body composition tracking</p>
                    <p className="red">Access to All National-Wide Gyms</p>
                    <div className="btn-select">
                    <button>Select</button>
                    </div>
                </li>
              
                <li className="li1 gold">
                    <h2 className="gold">Gold</h2>
                    <p className="price">£24.99/pm per person</p>
                    <hr></hr>
                    <p>Access to Gym</p>
                    <p>Access to Free Training Videos</p>
                    <p>Free Gym Classes</p>
                    <p> Bring A Friend</p>
                    <p className="red">Access to Meal Planing</p>
                    <p className="red">Access to Personalised Videos</p>
                    <p className="red">Fitness/body composition tracking</p>
                    <p className="red">Access to All National-Wide Gyms</p>
                    <div className="btn-select">
                        <button>Select</button>
                    </div>
                </li>

                <li className="li1 platinum">
                    <h2 className="plat">Platnuim</h2>
                    <p className="price">£35.99/pm per person</p>
                    <hr></hr>
                    <p>Access to Gym</p>
                    <p>Access to Free Training Videos</p>
                    <p>Free Gym Classes</p>
                    <p> Bring A Friend</p>
                    <p>Access to Meal Planing</p>
                    <p>Access to Personalised Videos</p>
                    <p>Fitness/body composition tracking</p>
                    <p>Access to All National-Wide Gyms</p>
                    <div className="btn-select">
                        <button>Select</button>
                    </div>
                </li>
            </ul>
            <div className="black"></div>
        </div>
    )
}