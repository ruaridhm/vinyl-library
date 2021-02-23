import React, { useReducer } from 'react';
import RecordContext from './recordContext';
import recordReducer from './recordReducer';
import axios from 'axios';
import {
  GET_RECORDS,
  ADD_RECORD,
  DELETE_RECORD,
  SET_CURRENT,
  SET_MOVE_RECORD,
  CLEAR_CURRENT,
  UPDATE_RECORD,
  FILTER_RECORDS,
  CLEAR_RECORDS,
  CLEAR_FILTER,
  RECORD_ERROR,
} from '../types';

const RecordState = (props) => {
  const initialState = {
    records: null,
    current: null,
    moveRecord: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(recordReducer, initialState);

  // Get Records
  const getRecords = async () => {
    try {
      const res = await axios.get('/api/records');
      dispatch({ type: GET_RECORDS, payload: res.data });
    } catch (err) {
      dispatch({
        type: RECORD_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Record
  const addRecord = async (record) => {
    console.log(record);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/records', record, config);
      dispatch({ type: ADD_RECORD, payload: res.data });
    } catch (err) {
      dispatch({
        type: RECORD_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Delete Record
  const deleteRecord = async (id) => {
    try {
      await axios.delete(`/api/records/${id}`);
      dispatch({
        type: DELETE_RECORD,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: RECORD_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Update Record
  const updateRecord = async (record) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/api/records/${record._id}`, record, config);
      dispatch({
        type: UPDATE_RECORD,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: RECORD_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Clear Records
  const clearRecords = () => {
    dispatch({ type: CLEAR_RECORDS });
  };
  //Set Current Record
  const setCurrent = (record) => {
    dispatch({ type: SET_CURRENT, payload: record });
  };
  //Set Move Record
  const setMoveRecord = (record) => {
    dispatch({ type: SET_MOVE_RECORD, payload: record });
  };
  //Clear Current Record
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Filter Records
  const filterRecords = (text) => {
    dispatch({ type: FILTER_RECORDS, payload: text });
  };
  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <RecordContext.Provider
      value={{
        records: state.records,
        current: state.current,
        moveRecord: state.moveRecord,
        filtered: state.filtered,
        error: state.error,
        addRecord,
        deleteRecord,
        setCurrent,
        setMoveRecord,
        clearCurrent,
        updateRecord,
        filterRecords,
        clearFilter,
        getRecords,
        clearRecords,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};

export default RecordState;
