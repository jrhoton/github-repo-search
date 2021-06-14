import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import './ErrorModal.css';

/**
 * ErrorModal View
 * 
 * This component intercepts and displays errors thrown by the GitHub API.
 * @props message
 */
const ErrorModal = (props) => {
    const [open, setOpen] = useState(true);

    const handleModalClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            aria-label='error modal'
            role='alert'
            className='modal'
            open={open}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}>
            <Fade in={open}>
                <div className='errorMessage'>
                    <h2>Error!</h2>
                    <p>{props.message}</p>
                </div>
            </Fade>
        </Modal>
    );
};

export default ErrorModal;