import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Spacer = styled.div`
  width: 22rem;
  padding: 0.5em;
  margin: 0.5em;
  @media (max-width: 1170px) {
    display: none;
  }
`;

export const HomeFilterContainer = styled.div`
  width: 22rem;
  padding: 0.5em;
  margin: 0.5em;
  @media (max-width: 785px) {
    display: none;
  }
`;

export const MobileFilterContainer = styled(HomeFilterContainer)`
  @media (max-width: 785px) {
    display: block;
  }
`;

export const AddRecordButtonWrapper = styled.div`
  width: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  @media (max-width: 785px) {
    display: none;
  }
`;

export const MobileControlsContainer = styled.div`
  display: none;

  @media (max-width: 785px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const MobileRecordFilterContainer = styled.div``;

export const AddRecordButtonContainer = styled.div`
  width: 50%;
  margin: auto;
  grid-column: 4/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.black};
  margin-top: 1.1em;
  height: fit-content;
`;

export const AddRecordButtonDescription = styled.p`
  margin: 0;
  text-align: center;
`;
