import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export default function ModalShow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <Button onClick={props.onHide} className="btn-close"></Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="row">

        <Image src={`/img/${props.product.img}`} className="col-5" alt="..." />
        <p className="col-5 pl-5">
          <h4 className="font-weight-bold my-4">{props.product.name}</h4>
          {props.product.description}
          <h5 className="font-weight-bold my-4">price: {props.product.price}₪</h5>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide} className="btn btn-light"><Icon.XCircle/></Button> */}
      </Modal.Footer>
    </Modal>
  );
}
