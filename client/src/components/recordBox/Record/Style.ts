import styled from 'styled-components';

export const StyledRecord = styled.div`
  background-color: ${({ theme }) => theme.black};
  width: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.dangerColor};
    cursor: pointer;
  }
`;
export const RecordHighlighted = styled(StyledRecord)`
  background-color: ${({ theme }) => theme.dangerColor};
`;

export const RecordMoveHighlighted = styled(StyledRecord)`
  background-color: ${({ theme }) => theme.successColor};
`;
