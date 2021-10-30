import React from 'react'
import { Modal, Button , Image } from 'react-bootstrap';

export default function ModalAlert(props) {
    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header style={{backgroundColor: 'var(--green'}}>
            <Modal.Title id="contained-modal-title-vcenter">
              <Button onClick={props.onHide} className="btn-close"></Button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="display-4 text-center bg-dark text-white">
              <i>hi {props.user }</i>
              <p>welcome 
            {props.resAction === 'create' ? ' to our shop' : ' again'}</p>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: 'var(--green'}}>
            <Image src={'/img/mac.png'} height="50" className="mx-auto"/>
            {/* <Button onClick={props.onHide} className="btn btn-light"><Icon.XCircle/></Button> */}
          </Modal.Footer>
        </Modal>
    )
}
