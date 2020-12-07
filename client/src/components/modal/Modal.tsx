import * as React from 'react';
import './modal.css';
import Button from '../button/Button';

const Modal = (
  headerText: string,
  bodyHeaderText: string,
  bodyText: string,
  show: boolean,
  close: any, //React.SetStateAction?
  closeColor: string,
  confirm: Function,
  confirmText: string,
  confirmColor: string
) => {
  return (
    <div
      className='modal-wrapper'
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <div className='modal-header'>
        <p>{headerText}</p>
        <span onClick={close} className='modal-close-btn'>
          x
        </span>
      </div>
      <div className='modal-content'>
        <div className='modal-body'>
          <h4>{bodyHeaderText}</h4>
          {bodyText}
        </div>
        <div className='modal-footer'>
          <Button
            onClick={close}
            buttonStyle={closeColor}
            type='button'
            buttonSize='btn--medium'
          >
            Cancel
          </Button>
          <Button
            onClick={confirm}
            buttonStyle={confirmColor}
            type='button'
            buttonSize='btn--medium'
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
