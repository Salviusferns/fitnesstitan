import './Dragable.css';
import Draggable from 'react-draggable';
export default function Dragable(props){

    return(
        <div>
            <section>
                <Draggable>
                 <div className="box">
                  <button>COMPONENT</button>
                 </div>
                </Draggable>

            </section>
        </div>
    )
}