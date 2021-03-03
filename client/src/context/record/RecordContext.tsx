import { createContext } from 'react';
import { RecordInterface } from '../../components/records/RecordItem/RecordItem';

type RecordContext = {
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
  current: RecordInterface;
  moveRecord: RecordInterface | RecordInterface[];
  filtered: Array<RecordInterface> | null;
  error: string;
  loading: boolean;
};

const RecordContext = createContext<RecordContext>(undefined!); //TODO A more robust type is possible

export default RecordContext;
