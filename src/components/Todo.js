import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    function deleteHandler() {
        setModalIsOpen(true)
    }
    function closeModalHandler() {
        setModalIsOpen(false)
    }
    return (
        <div className="card">
          <h2>{props.title}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
          { modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null }
          { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
        </div>
    );
}

export default Todo;