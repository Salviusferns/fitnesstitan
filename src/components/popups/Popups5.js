import "./Popups5.css"
export default function Popups4(props){
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
    ):"";
}