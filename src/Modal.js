import './style.css';

const Modal = props => {
	// static propTypes = {
	// 	isModalOpen: React.PropTypes.bool.isRequired,
	// 	closeModal: React.PropTypes.func.isRequired,
	// 	style: React.PropTypes.shape({
	// 		modal: React.PropTypes.object,
	// 		overlay: React.PropTypes.object
	// 	})
	// };
    const { isModalOpen, closeModal, children } = props;

	
    return (
        <div className='outerStyle' style={{display: isModalOpen ? "block" : "none"}}>
            <div className='overlay' onClick={closeModal} />
            <div onClick={closeModal} />
            <div className='modal'> {children} </div>
        </div>
    );
}

export default Modal;