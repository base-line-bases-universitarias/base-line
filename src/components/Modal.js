import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ handleClickCloseModal }) => {
	return ReactDOM.createPortal(
		<div className='modal'>
			<div className='modal__container'>
				<button
					className='modal__container__button'
					onClick={handleClickCloseModal}
				>
					Cerrar
				</button>
				<p>Este es un modal</p>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
