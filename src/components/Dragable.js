import React from 'react';
import './Dragable.css';
import Draggable from 'react-draggable';
export default function Dragable(props){;
    const [x, setX]= useState(0)
    const [y, setY]= useState(0)
    const handleStop = (event, dragElement) => {
    setX(dragElement.x)
    setY(dragElement.y)
  };

    return (
        <div>
            <section>
                <Draggable >
                 <div className="box">
                  <button>COMPONENT</button>
                 </div>
                </Draggable>

            </section>
        </div>
    )
}
