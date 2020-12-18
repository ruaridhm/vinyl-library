import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const ModalWrapper = styled.div`
  background: ${(props) => props.theme.white};
  width: 80%;
  max-width: 800px;
  margin: auto;
  transition: all 0.5s ease;
  border-radius: 0.5em;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
  border: 1px solid ${(props) => props.theme.black};
  z-index: 1;
`;
const ModalHeader = styled.div`
  background: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.lightColor};
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;
`;
const ModalClose = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;
const ModalContent = styled.div`
  padding: 0em 1em;
`;
const ModalBody = styled.div`
  margin-bottom: 1em;
`;

const ModalBodyHeader = styled.h4`
  font-size: 1.8rem;
  color: ${(props) => props.theme.secondaryColor};
  text-align: center;
  margin: 1rem auto;
`;
const ModalBodyText = styled.p`
  font-size: 1rem;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.darkGrey};
  padding: 1rem;
  margin: 0.25rem 0 0.25rem 0;
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Modal = ({
  headerText,
  bodyHeaderText,
  bodyText,
  show,
  close,
  confirm,
  confirmText,
}) => {
  return (
    <ModalWrapper
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <ModalHeader>
        <p>{headerText}</p>
        <ModalClose onClick={close}>x</ModalClose>
      </ModalHeader>
      <ModalContent>
        <ModalBody>
          <ModalBodyHeader>{bodyHeaderText}</ModalBodyHeader>
          <ModalBodyText>{bodyText}</ModalBodyText>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={close}
            solidDanger
            type='button'
            medium
            children='Cancel'
          />

          <Button
            onClick={confirm}
            solidSuccess
            type='button'
            medium
            children={confirmText}
          />
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
