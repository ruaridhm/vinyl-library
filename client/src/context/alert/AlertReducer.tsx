import { SET_ALERT, REMOVE_ALERT } from '../types';

type Actions =
  | {
      type: 'SET_ALERT';
      payload: { msg: string; type: string; id: string };
    }
  | {
      type: 'REMOVE_ALERT';
      payload: string;
    };

interface Alert {
  msg: string;
  type: string;
  id: string;
}

type State = Alert[];

const AlertReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default AlertReducer;
