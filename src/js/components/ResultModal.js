import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import Button from "./Button"

const ResultModal = (props) => {
    return(
        <Modal show={props.show} onHide={() => props.handleClose(1)}>
            <Modal.Header closeButton>
                <Modal.Title>Result Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    Is that your card? Of course it is, this test is magical!
                </div>
                <div style={{marginTop: '30px'}}></div>
                <div className="text-center">
                    <img style={{height: '150px', width: '100px'}} src={props.chosenCard} alt="choosen card"/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    class={'btn-primary'}
                    onClick={() => props.handleClose(1)} 
                    text={'Play Again!'}
                />
                <Button
                    class={'btn-primary'}
                    onClick={() => props.handleClose(2)} 
                    text={'Exchange deck!'}
                />
            </Modal.Footer>
        </Modal>
    )
}

ResultModal.defaultProps = {
    show: false
}

ResultModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default ResultModal;