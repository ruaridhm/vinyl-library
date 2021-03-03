import { createContext } from 'react';

type alertContext = {
  setAlert: (msg: string, type: string, timeout?: number) => void;
  alerts: any[];
};

const alertContext = createContext<alertContext>(undefined!); //TODO A more robust type is possible

export default alertContext;
