import { AxiosResponse } from 'axios';
import { RecordInterface } from '../../components/records/RecordItem/RecordItem';
import {
  GET_RECORDS,
  ADD_RECORD,
  DELETE_RECORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECORD,
  FILTER_RECORDS,
  CLEAR_FILTER,
  RECORD_ERROR,
  CLEAR_RECORDS,
  SET_MOVE_RECORD,
} from '../types';

type Actions =
  | {
      type: 'GET_RECORDS';
      payload: Array<any>;
    }
  | {
      type: 'ADD_RECORD';
      payload: AxiosResponse<any>;
    }
  | {
      type: 'DELETE_RECORD';
      payload: string;
    }
  | {
      type: 'SET_CURRENT';
      payload: RecordInterface;
    }
  | {
      type: 'CLEAR_CURRENT';
    }
  | {
      type: 'UPDATE_RECORD';
      payload: AxiosResponse<any>;
    }
  | {
      type: 'FILTER_RECORDS';
      payload: string;
    }
  | {
      type: 'CLEAR_FILTER';
    }
  | {
      type: 'RECORD_ERROR';
      payload: string;
    }
  | {
      type: 'CLEAR_RECORDS';
    }
  | {
      type: 'SET_MOVE_RECORD';
      payload: RecordInterface;
    };

interface Record {
  records: Array<RecordInterface>;
  current: RecordInterface | null;
  moveRecord: Array<RecordInterface> | null;
  filtered: Array<RecordInterface> | null;
  error: string | null;
  loading: boolean;
}

type State = Record;

export default (state: State, action: Actions) => {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload,
        loading: false,
      };
    case ADD_RECORD:
      return {
        ...state,
        records: [action.payload, ...state.records],
        loading: false,
      };
    case UPDATE_RECORD:
      return {
        ...state,
        records: state.records.map((record: RecordInterface) =>
          record._id === action.payload._id ? action.payload : record
        ),
        loading: false,
      };
    case DELETE_RECORD:
      return {
        ...state,
        records: state.records.filter(
          (record: RecordInterface) => record._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        records: null,
        filtered: null,
        error: null,
        current: null,
        moveRecord: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case SET_MOVE_RECORD:
      return {
        ...state,
        moveRecord: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_RECORDS:
      return {
        ...state,
        filtered: state.records.filter((record: RecordInterface) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            record.title.match(regex) ||
            record.artist.match(regex) ||
            record.label.match(regex) ||
            record.catalogNumber.match(regex) ||
            record.releaseDate.match(regex) ||
            record.country.match(regex) //||
            //  record.condition.match(regex) ||
            //  record.barcode.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case RECORD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
