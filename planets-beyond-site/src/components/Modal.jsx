import {ModalBody, ModalContent } from "../styled-components/modal.js"

 const Modal =({handler}) =>{

    return(
        <ModalBody id="modal-body">
        <ModalContent id="modal-content">
             <div>Play the video</div>
             <div><button type="button" onClick={handler}>Close Modal</button></div>
        </ModalContent>
      </ModalBody>
    )
}

export default Modal