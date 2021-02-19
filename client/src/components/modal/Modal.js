import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const ModalWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  width: 80%;
  max-width: 800px;
  top: 20px;
  margin: auto;
  transition: all 0.5s ease;
  border-radius: 0.5em;
  position: fixed;
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.black};
  z-index: 1;
`;
const ModalHeader = styled.div`
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.lightColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const HeaderText = styled.h4``;
const ModalClose = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;
const ModalContent = styled.div`
  padding: 0em 1em;
`;
const ModalBody = styled.div``;

const ModalBodyHeader = styled.h4`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secondaryColor};
  text-align: center;
  margin: 1rem auto;
`;
const ModalBodyContainer = styled.div`
  font-size: 1rem;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.darkGrey};
  padding: 1rem;
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
