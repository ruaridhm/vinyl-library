import React, { useContext } from 'react';
import styled from 'styled-components';
import RecordContext from '../../context/record/recordContext';

const StyledRecord = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 5px;
  &:hover {
    background-color: ${(props) => props.theme.dangerColor};
    cursor: pointer;
  }
`;
const RecordHighlighted = styled(StyledRecord)`
  background-color: ${(props) => props.theme.dangerColor};
`;

const RecordMoveHighlighted = styled(StyledRecord)`
  background-color: ${(props) => props.theme.successColor};
`;

const Record = ({ recordInfo }) => {
  const recordContext = useContext(RecordContext);
  const { current, setCurrent, moveRecord } = recordContext;

  const onClickHandler = () => {
    setCurrent(recordInfo);
  };

  if (current !== null && current._id === recordInfo._id) {
    return <RecordHighlighted onClick={onClickHandler} />;
  } else if (moveRecord !== null && moveRecord._id === recordInfo._id) {
    return <RecordMoveHighlighted onClick={onClickHandler} />;
  } else {
    return <StyledRecord onClick={onClickHandler} />;
  }
};

export default Record;
