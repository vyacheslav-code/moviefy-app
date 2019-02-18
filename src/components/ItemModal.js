import React from 'react'
import Modal from 'react-bootstrap4-modal'

export default  (props) => (
    <Modal
        visible={!!props.selectedItem}
        className="modal"
    >
        <h3>Go Watch</h3>
        {props.selectedItem && <p className="modalTitle">{props.selectedItem}</p>}
        <button className="btn btn-success" onClick={props.handleClear}>Okay</button>
    </Modal>
);