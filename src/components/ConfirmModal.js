import React from 'react';

import Modal from 'react-modal';

const ConfirmModal = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.requestClose}
            ariaHideApp={false}
            closeTimeoutMS={200}
            className="edit-expense__modal"
            contentLabel="Remove confirmation"
        >
            <div>
                <div className="modal__header">Confirm Removal</div>
                <div className="modal__title">{props.title}</div>
                <button 
                    className="modal__button" 
                    onClick={props.remove}
                    disabled={props.buttonText !== 'Remove'}
                >
                    {props.buttonText}
                </button>
          </div>
        </Modal>
    )

}

export default ConfirmModal;