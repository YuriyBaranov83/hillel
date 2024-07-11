import { Modal as ModalBootstrap } from 'react-bootstrap';

const Modal = ({ show, handleClose, children, title , className}) => {
  return (
    <ModalBootstrap show={show} onHide={handleClose} className={className}> 
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title>{title}</ModalBootstrap.Title>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>{children}</ModalBootstrap.Body>
    </ModalBootstrap>
  );
};

export default Modal;