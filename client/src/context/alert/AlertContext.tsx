import { createContext } from 'react';

type alertContextType = {
  setAlert: (msg: string, type: string, timeout?: number) => void;
  alerts: any[];
};

const alertContext = createContext<alertContextType>(undefined!); //TODO A more robust type is possible

export default alertContext;
