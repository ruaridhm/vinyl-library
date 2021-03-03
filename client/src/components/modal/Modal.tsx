import React, { ReactNode } from 'react';
import { ReactElement } from 'react';
import Button from '../button/Button';
import {
  ModalWrapper,
  ModalHeader,
  HeaderText,
  ModalClose,
  ModalContent,
  ModalBody,
  ModalBodyHeader,
  ModalBodyContainer,
  ModalFooter,
} from './Style';

interface ModalProps {
  headerText: string;
  bodyHeaderText?: string;
  bodyText: string | ReactNode;
  show: boolean;
  close: () => void;
  confirm: () => void;
  confirmText: string;
}

const Modal = ({
  headerText,
  bodyHeaderText,
  bodyText,
  show,
  close,
  confirm,
  confirmText,
}: ModalProps): ReactElement => {
  return (
    <ModalWrapper
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
        display: show ? 'block' : 'none',
      }}
    >
      <ModalHeader>
        <HeaderText>{headerText}</HeaderText>
        <ModalClose onClick={close}>x</ModalClose>
      </ModalHeader>
      <ModalContent>
        <ModalBodyContainer>
          <ModalBodyHeader>{bodyHeaderText}</ModalBodyHeader>
          <ModalBody>{bodyText}</ModalBody>
        </ModalBodyContainer>
        <ModalFooter>
          <Button
            onClick={close}
            solidDanger
            type='button'
            medium
            label='Cancel'
          />

          <Button
            onClick={confirm}
            solidSuccess
            type='button'
            medium
            label={confirmText}
          />
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
