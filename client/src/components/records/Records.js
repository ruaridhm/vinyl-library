import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RecordContext from '../../context/record/recordContext';
import RecordItem from './RecordItem';
import Spinner from '../layout/spinner';

const Records = ({ displayAddRecord, setDisplayAddRecord }) => {
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
    <div>
      {records !== null && !loading ? (
        <TransitionGroup className='recordItem-container'>
          {filtered !== null
            ? filtered.map((record) => (
                <CSSTransition key={record._id} timeout={500} classNames='item'>
                  <RecordItem
                    record={record}
                    displayAddRecord={displayAddRecord}
                    setDisplayAddRecord={setDisplayAddRecord}
                  />
                </CSSTransition>
              ))
            : records.map((record) => (
                <CSSTransition key={record._id} timeout={500} classNames='item'>
                  <RecordItem
                    record={record}
                    displayAddRecord={displayAddRecord}
                    setDisplayAddRecord={setDisplayAddRecord}
                  />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Records;
