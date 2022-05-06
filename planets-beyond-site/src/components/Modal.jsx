

 const Modal =({handler}) =>{

    return(
        <div className="modal" >
        <p>I'm a modal</p>
        <button type="button" onClick={handler}>Close Modal</button>
      </div>
    )
}

export default Modal