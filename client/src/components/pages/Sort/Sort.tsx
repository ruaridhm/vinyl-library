import React, { useState, useContext, useEffect } from 'react';
import Dropdown from '../../dropdown/Dropdown';
import AuthContext from '../../../context/auth/AuthContext';
import RecordContext from '../../../context/record/RecordContext';
import AlertContext from '../../../context/alert/AlertContext';
import bubbleSort from '../../../sortingAlgos/bubble';
import insertionSort from '../../../sortingAlgos/insertion';
import mergeSortHandler from '../../../sortingAlgos/merge';
import quickSortHandler from '../../../sortingAlgos/quick';
import SortOrders from '../../sortOrders/SortOrders';
import Form from '../../form/Form';
import Modal from '../../modal/Modal';
import { RecordInterface } from '../../records/RecordItem/RecordItem';

interface SortStateOptionsInterface {
  id: number;
  title: string;
  value: string;
}

interface MovesArrInterface {
  from: RecordInterface;
  to: RecordInterface;
}

const Sort = () => {
  const [sortItems, setSortItems] = useState<SortStateOptionsInterface[] | []>(
    []
  );
  const [sortBy, setSortBy] = useState<SortStateOptionsInterface[] | []>([]);
  const [orderBy, setOrderBy] = useState<SortStateOptionsInterface[] | []>([]);
  const [sortingAlgorithm, setSortingAlgorithm] = useState<
    SortStateOptionsInterface[] | []
  >([]);
  const [collectionType, setCollectionType] = useState<
    SortStateOptionsInterface[] | []
  >([]);
  const [movesArr, setMovesArr] = useState([]);
  const [showSortForm, setShowSortForm] = useState<boolean>(true);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [confirmSort, setConfirmSort] = useState<boolean>(false);
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const alertContext = useContext(AlertContext);
  const { getRecords, records, updateRecord } = recordContext;
  const { setAlert } = alertContext;

  //function called in SortOrders to clear the Dropdown selections and MovesArr once the user clicks Finish after sorting.
  const resetFormValues = () => {
    setSortItems([]);
    setSortBy([]);
    setOrderBy([]);
    setSortingAlgorithm([]);
    setCollectionType([]);
    setMovesArr([]);
  };

  useEffect(() => {
    authContext.loadUser();
    getRecords();
    // eslint-disable-next-line
  }, []);

  //Waits for confirmSort to be true and then runs the Sort function
  useEffect(() => {
    confirmSort === true && Sort();
    //eslint-disable-next-line
  }, [confirmSort]);

  //Function to cancel out of the confirmation modal for sorting collection digitally
  const cancelModel = () => {
    setConfirmSort(false);
    setShowConfirmModal(false);
  };

  //On form submit this function is called, then if digital is selected it shows the confirmation modal or if physical it sets ConfirmSort to True and the above useEffect is run.
  const sortCollection = (e: React.FormEvent) => {
    e.preventDefault();

    collectionType[0].value === 'digital' && confirmSort === false
      ? setShowConfirmModal(true)
      : setConfirmSort(true);
  };

  //Main Sorting Function
  const Sort = () => {
    //Function should only be run by the above useEffect so confirmSort should always be true here. This is a check to make sure it is not called independently from the useEffect.
    if (confirmSort === true) {
      //check for null values in Sort form
      if (
        !sortItems.length ||
        !sortBy.length ||
        !orderBy.length ||
        !sortingAlgorithm.length ||
        !collectionType.length
      ) {
        setAlert(
          'You must select an option from each Dropdown below ',
          'danger'
        );
      } else {
        var sorted;
        //make a new array of records containing the _id and the selected sortBy from the sortBy useState
        // let selectedOptions = [
        //   sortItems[0].value,
        //   sortBy[0].value,
        //   orderBy[0].value,
        //   sortingAlgorithm[0].value,
        //   collectionType[0].value,
        // ];
        // console.log(selectedOptions);

        //Filters out selected records to sort determined by the 'Sort By' Dropdown in the Sort Form.

        let selectedBoxes;

        sortItems[0].value === 'all'
          ? (selectedBoxes = records)
          : sortItems[0].value === 'a'
          ? (selectedBoxes = records.filter(
              (record) => record.locationPrimary === 'a'
            ))
          : sortItems[0].value === 'b'
          ? (selectedBoxes = records.filter(
              (record) => record.locationPrimary === 'b'
            ))
          : sortItems[0].value === 'c'
          ? (selectedBoxes = records.filter(
              (record) => record.locationPrimary === 'c'
            ))
          : sortItems[0].value === 'd'
          ? (selectedBoxes = records.filter(
              (record) => record.locationPrimary === 'd'
            ))
          : sortItems[0].value === ''
          ? (selectedBoxes = records.filter(
              (record) => record.locationPrimary === ''
            ))
          : console.log('selected boxes hit default case');

        //Determines which sorting algorithm is selected and calls the sorting function for that algorithm.

        sortingAlgorithm[0].value === 'bubble'
          ? (sorted = bubbleSort(selectedBoxes, sortBy[0].value, setMovesArr))
          : sortingAlgorithm[0].value === 'merge'
          ? (sorted = mergeSortHandler(
              selectedBoxes,
              sortBy[0].value,
              setMovesArr
            ))
          : sortingAlgorithm[0].value === 'insertion'
          ? (sorted = insertionSort(
              selectedBoxes,
              sortBy[0].value,
              setMovesArr
            ))
          : sortingAlgorithm[0].value === 'quick'
          ? (sorted = quickSortHandler(
              selectedBoxes,
              sortBy[0].value,
              setMovesArr
            ))
          : setAlert(
              'Default Case hit on sortingAlgorithm switch statement.... something went wrong!',
              'danger'
            );

        //Checks for descending order and reverses the sorted results array
        //TODO Room to improve .reverse method has a BigO of O(N)
        orderBy[0].value === 'descending' && sorted.reverse();

        //Checks for Digital Sort and iterates through each sorted record then updates each record in order with the correct sorted record.
        if (collectionType[0].value === 'digital') {
          sorted.forEach((sortedRecord: RecordInterface, index: number) => {
            sortedRecord.locationSecondary = (index + 1).toString();

            // const match = records.findIndex((r) => r._id === sortedRecord._id);
            // setCurrent(match);
            // console.log(current);
            updateRecord(sortedRecord);
          });
        }

        collectionType[0].value !== 'digital' && setShowSortForm(false);

        return sorted;
      }
    }
  };

  const itemsToBeSorted = [
    {
      id: 1,
      title: 'Entire Collection',
      value: 'all',
    },
    {
      id: 2,
      title: 'Box A',
      value: 'a',
    },
    {
      id: 3,
      title: 'Box B',
      value: 'b',
    },
    {
      id: 4,
      title: 'Box C',
      value: 'c',
    },
    {
      id: 5,
      title: 'Box D',
      value: 'd',
    },
    {
      id: 6,
      title: 'Unassigned',
      value: '',
    },
  ];
  const sortByItems = [
    {
      id: 1,
      title: 'Title',
      value: 'title',
    },
    {
      id: 2,
      title: 'Artist',
      value: 'artist',
    },
    {
      id: 3,
      title: 'Label',
      value: 'label',
    },
    {
      id: 4,
      title: 'Catalog Number',
      value: 'catalogNumber',
    },
    {
      id: 5,
      title: 'Release Date',
      value: 'releaseDate',
    },
    {
      id: 6,
      title: 'Country',
      value: 'country',
    },
    // {
    //   id: 7,
    //   title: 'Genre',
    //   value: 'genre'
    // },
    {
      id: 8,
      title: 'Record Condition',
      value: 'recordCondition',
    },
    {
      id: 9,
      title: 'Sleeve Condition',
      value: 'sleeveCondition',
    },
  ];
  const orderByItems = [
    {
      id: 1,
      title: 'Ascending',
      value: 'ascending',
    },
    {
      id: 2,
      title: 'Descending',
      value: 'descending',
    },
  ];
  const sortingAlgorithms = [
    {
      id: 1,
      title: 'Bubble Sort',
      value: 'bubble',
    },
    {
      id: 2,
      title: 'Insertion Sort',
      value: 'insertion',
    },
    {
      id: 3,
      title: 'Merge Sort',
      value: 'merge',
    },
    {
      id: 4,
      title: 'Quick Sort',
      value: 'quick',
    },
  ];
  const collectionTypes = [
    {
      id: 1,
      title: 'Digital',
      value: 'digital',
    },
    {
      id: 2,
      title: 'Physical',
      value: 'physical',
    },
    {
      id: 3,
      title: 'Both',
      value: 'both',
    },
  ];

  const SortInputs = () => {
    return (
      <>
        <Dropdown
          title='Sort Items:'
          items={itemsToBeSorted}
          selection={sortItems}
          setSelection={setSortItems}
        />
        <Dropdown
          title='Sort By:'
          items={sortByItems}
          selection={sortBy}
          setSelection={setSortBy}
        />
        <Dropdown
          title='Order:'
          items={orderByItems}
          selection={orderBy}
          setSelection={setOrderBy}
        />
        <Dropdown
          title='Sorting Algorithm:'
          items={sortingAlgorithms}
          selection={sortingAlgorithm}
          setSelection={setSortingAlgorithm}
        />
        <Dropdown
          title='Collection Type:'
          items={collectionTypes}
          selection={collectionType}
          setSelection={setCollectionType}
        />
      </>
    );
  };

  return (
    <>
      {showSortForm && (
        <Form title='Sort' onSubmit={sortCollection} formInputs={SortInputs} />
      )}

      <Modal
        headerText='Confirm Sort'
        bodyHeaderText='Are you sure you want to sort your digital collection?'
        bodyText='(this operation is irreversible!)'
        show={showConfirmModal}
        close={cancelModel}
        confirm={() => {
          setConfirmSort(true);
          setShowConfirmModal(false);
        }}
        confirmText='Sort!'
      />

      {!showSortForm && (
        <SortOrders
          movesArr={movesArr}
          setShowSortForm={setShowSortForm}
          resetFormValues={resetFormValues}
        />
      )}
    </>
  );
};

export default Sort;
