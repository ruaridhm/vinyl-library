import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import RecordContext from '../../../context/record/RecordContext';
import RecordItem from '../RecordItem/RecordItem';
import Spinner from '../../layout/Spinner/Spinner';
import { StyledTransitionGroup } from './Style';

interface RecordsProps {
  setDisplayAddRecord: Dispatch<SetStateAction<boolean>>;
}

const Records: React.FC<RecordsProps> = ({ setDisplayAddRecord }) => {
  const recordContext = useContext(RecordContext);

  const { records, filtered, getRecords, loading } = recordContext;

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line
  }, []);

  if (records !== null && records.length === 0 && !loading) {
    return <h4>Please add a record</h4>;
  }

  return (
    <>
      {records !== null && !loading ? (
        <StyledTransitionGroup>
          {filtered !== null
            ? filtered.map((record) => (
                <CSSTransition key={record._id} timeout={500} classNames='item'>
                  <RecordItem
                    record={record}
                    setDisplayAddRecord={setDisplayAddRecord}
                  />
                </CSSTransition>
              ))
            : records.map((record) => (
                <CSSTransition key={record._id} timeout={500} classNames='item'>
                  <RecordItem
                    record={record}
                    setDisplayAddRecord={setDisplayAddRecord}
                  />
                </CSSTransition>
              ))}
        </StyledTransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Records;
