import {
  ADD_RECORD,
  DELETE_RECORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECORD,
  FILTER_RECORDS,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return {
        ...state,
        records: [...state.records, action.payload],
      };
    case UPDATE_RECORD:
      return {
        ...state,
        records: state.records.map((record) =>
          record.id === action.payload.id ? action.payload : record
        ),
      };
    case DELETE_RECORD:
      return {
        ...state,
        records: state.records.filter((record) => record.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_RECORDS:
      return {
        ...state,
        filtered: state.records.filter((record) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            record.title.match(regex) ||
            record.artist.match(regex) ||
            record.label.match(regex) ||
            record.catalogNumber.match(regex) ||
            record.releaseDate.match(regex) ||
            record.format.match(regex) ||
            record.country.match(regex) ||
            record.condition.match(regex) ||
            record.barcode.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
