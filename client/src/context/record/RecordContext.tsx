import { createContext } from 'react';
import { RecordInterface } from '../../components/records/RecordItem/RecordItem';

type RecordContextType = {
  getRecords: () => Promise<void>;
  addRecord: (record: RecordInterface) => Promise<void>;
  deleteRecord: (id: string) => Promise<void>;
  updateRecord: (record: RecordInterface) => Promise<void>;
  clearRecords: () => void;
  setCurrent: (record: RecordInterface) => void;
  setMoveRecord: (record: RecordInterface) => void;
  clearCurrent: () => void;
  filterRecords: (text: string) => void;
  clearFilter: () => void;

  records: Array<RecordInterface> | null;
  current: RecordInterface | null;
  moveRecord: RecordInterface | null;
  filtered: Array<RecordInterface> | null;
  error: string | null;
  loading: boolean;
};

const RecordContext = createContext<RecordContextType>(undefined!); //TODO A more robust type is possible

export default RecordContext;
