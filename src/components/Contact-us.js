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
                <label className="help">what can we help you with?<input type= "text"  ></input></label>
                <input type="submit" id ="btn"></input>
            </form>
        </div>
    )
}