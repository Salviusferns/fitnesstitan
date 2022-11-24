import React from 'react';
import './Dragable.css';
export default function Dragable(props){
    function onDragStart(event) {
        event
          .dataTransfer
          .setData('text/plain', event.target.id);
        event
          .currentTarget
          .style
          .backgroundColor = 'yellow';
    }
    function onDragOver(event) {
        event.preventDefault();
        }
    function onDrop(event) {
            const id = event
              .dataTransfer
              .getData('text');
            const draggableElement = document.getElementById(id);
            const dropzone = event.target;
            dropzone.appendChild(draggableElement);
            event
              .dataTransfer
              .clearData();
          }
    return (
        <body>
            <div class="example-parent">
              <div class="example-origin">
                <div
                  id="draggable-1"
                  class="example-draggable"
                  draggable="true"
                  ondragstart={(event)=>onDragStart(event)}
                >
                  draggable
                </div>
              </div>

                  <div
                class="example-dropzone"
                ondragover={(event)=>onDragOver(event)}
                ondrop={(event)=>onDrop(event)}
              >
               dropzone
              </div>
            </div>          
        </body>
    )
}
