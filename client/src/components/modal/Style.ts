import styled from 'styled-components';

export const ModalWrapper = styled.div`
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
export const ModalHeader = styled.div`
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

export const HeaderText = styled.h4``;
export const ModalClose = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;
export const ModalContent = styled.div`
  padding: 0em 1em;
`;
export const ModalBody = styled.div``;

export const ModalBodyHeader = styled.h4`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secondaryColor};
  text-align: center;
  margin: 1rem auto;
`;
export const ModalBodyContainer = styled.div`
  font-size: 1rem;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.darkGrey};
  padding: 1rem;
`;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;
