import styled from 'styled-components';

export const RecordFormContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const FormHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  height: 32px;
  width: 32px;
`;

export const FormHeaderText = styled.h2`
  margin-bottom: 0px;
`;

export const RecordFormForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  width: 22rem;
  background-color: ${({ theme }) => theme.white};
  padding-bottom: 1em;
  height: fit-content;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 1.5em auto 1em auto;
`;

export const ShowAllRecordFormForm = styled(RecordFormForm)`
  width: 90%;
`;

export const ShowAllRecordForm = styled.div`
  width: 90%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
`;

export const RecordFormCloseButton = styled.div`
  margin-top: 1rem;
  height: 32px;
  width: 32px;
`;
export const RecordFormButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const RecordFormCloseButtonIcon = styled.i`
  cursor: pointer;
  &:hover {
    transform: rotateX(180deg);
    transition: 1s;
  }
`;

export const RecordFormStepButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const RecordFormStepButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 50%;
  height: 1.75rem;
  width: 1.75rem;
  border: none;
  margin: 1rem;
  background-color: ${({ theme }) => theme.backgroundLight};
  opacity: 0.5;
  border: 2px solid black;
  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};
  }
  &:active {
    background-color: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
  }
`;

export const ShowAllRecordFormStepButton = styled(RecordFormStepButton)`
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const DiscogsMultiResult = styled(RecordFormForm)`
  width: fit-content;
  padding: 1rem;
`;

export const StepContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

export const CheckboxStepContainer = styled(StepContainer)`
  margin: 0 auto;
`;
