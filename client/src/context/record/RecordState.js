import React, { useReducer } from 'react';
import uuid from 'uuid';
import RecordContext from './recordContext';
import recordReducer from './recordReducer';
import {
  ADD_RECORD,
  DELETE_RECORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECORD,
  FILTER_RECORDS,
  CLEAR_FILTER,
} from '../types';

const RecordState = (props) => {
  const initialState = {
    records: [
      {
        id: 1,
        title: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        label: 'RCA',
        catalogNumber: 'PB 41447',
        releaseDate: 'Jul 1987',
        format: 'Single',
        country: 'UK',
        condition: 'VG',
        barcode: '5 012394 144777',
        locationPrimary: '01',
        locationSecondary: '01',
      },
      {
        id: 2,
        title: 'Black Sabbath',
        artist: 'Black Sabbath',
        label: 'Vertigo',
        catalogNumber: 'VO 6',
        releaseDate: '1970',
        format: 'Album',
        country: 'UK',
        condition: 'M',
        barcode: '',
        locationPrimary: '01',
        locationSecondary: '02',
      },
      {
        id: 3,
        title: 'The Dark Side Of The Moon',
        artist: 'Pink Floyd',
        label: 'Harvest',
        catalogNumber: '2C 064-05249',
        releaseDate: '1973',
        format: 'Album',
        country: 'UK',
        condition: 'NM',
        barcode: '',
        locationPrimary: '01',
        locationSecondary: '03',
      },
      {
        id: 4,
        title: 'Blood On The Tracks',
        artist: 'Bob Dylan',
        label: 'Columbia',
        catalogNumber: 'PC 33235',
        releaseDate: 'nov 1974',
        format: 'Album',
        country: 'US',
        condition: 'VG',
        barcode: '',
        locationPrimary: '01',
        locationSecondary: '04',
      },
    ],
  };

  const [state, dispatch] = useReducer(recordReducer, initialState);

  // Add Record

  //Delete Record

  //Set Current Record

  //Clear Current Record

  //Update Record

  //Filter Records

  //Clear Filter

  return (
    <RecordContext.Provider
      value={{
        records: state.records,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};

export default RecordState;
