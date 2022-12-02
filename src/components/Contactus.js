import "./Contact-us.css";
export default function Contactus(props){
    return(

        <div className="Contact-us">
            <form className="details">
                <div className="name">
                    <label>first name<input type= "text" ></input></label>
                    <label>surname<input type= "text"  ></input></label>
                </div>
                <label className="email">email<input type= "text" ></input></label>
                <label className="help">what can we help you with?<textarea type= "text"  ></textarea></label>
                <input type="submit" id ="btn"></input>
            </form>
            <div className="number">
                <h1>contact details</h1>
                <p>01895 85355330</p>
                <p>titancifitnesshelp@titanic.co.uk</p>
                <h1 className="salvis"></h1>
                <h1>location</h1>
                <p>0 Park Rd,Uxbridge</p>
                <p>UB8 1NQ</p>
            </div>
            <div className="info-1">
                <h1>contact us</h1>
                <ul>
                    <li>need to get in touch with us?</li>
                    <li>here is our contact details.please</li>
                    <li className="list">get in touch with us with your inquiries.</li>
                </ul>
            </div>
        </div>
    )
}