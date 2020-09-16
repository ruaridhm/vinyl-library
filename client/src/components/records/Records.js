import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RecordContext from '../../context/record/recordContext';
import RecordItem from './RecordItem';
import Spinner from '../layout/spinner';

const Records = () => {
  const recordContext = useContext(RecordContext);

  const { records, filtered, getRecords, loading } = recordContext;

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line
  }, []);

  if (records.length === 0) {
    return <h4>Please add a record</h4>;
  }

  return (
    <Fragment>
      {records !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((record) => (
                <CSSTransition key={record._id} timeout={500} classNames='item'>
                  <RecordItem record={record} />
                </CSSTransition>
              ))
            : records.map((record) => (
                <CSSTransition key={record._id} timeout={500} classNames='item'>
                  <RecordItem record={record} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Records;
