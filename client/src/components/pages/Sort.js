import React, { useState, useContext, useEffect } from 'react';
import Button from '../button/Button';
import Dropdown from '../dropdown/Dropdown';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';
import AlertContext from '../../context/alert/AlertContext';

const Sort = () => {
  const [sortBy, setSortBy] = useState(['']);
  const [orderBy, setOrderBy] = useState(['']);
  const [sortItems, setSortItems] = useState(['']);

  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const alertContext = useContext(AlertContext);
  const { records } = recordContext;
  const { setAlert } = alertContext;
  //getRecords();

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  //Used to convert Dropdown values to camelCase
  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  const sortCollection = (e) => {
    e.preventDefault();
    //check for null values
    if (sortBy[0].length || orderBy[0].length <= 0) {
      setAlert('You must select Something to sort by and an order ', 'danger');
    } else {
      //make a new array of of records containing the _id and the selected sortby from the sortBy useState

      const sortArray = records.map(function (item) {
        //selectedSort takes the value from sortBy state and converts it to camelcase
        const selectedSort = camelize(sortBy[0].value);
        //const picked =
        const picked = [item[selectedSort], item._id];
        return picked;
      });
      const sorted = [...sortArray].sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });

      if (orderBy[0].value === 'Descending') {
        sorted.reverse();
      }
      console.log(sorted);
      return sorted;
    }
    return;
  };

  //if orderBy State = Descending

  const itemsToBeSorted = [
    {
      id: 1,
      value: 'Entire Collection',
    },
    {
      id: 2,
      value: 'Box A',
    },
    {
      id: 3,
      value: 'Box B',
    },
    {
      id: 4,
      value: 'Box C',
    },
    {
      id: 5,
      value: 'Box D',
    },
  ];

  const sortByItems = [
    {
      id: 1,
      value: 'Title',
    },
    {
      id: 2,
      value: 'Artist',
    },
    {
      id: 3,
      value: 'Label',
    },
    {
      id: 4,
      value: 'Catalog Number',
    },
    {
      id: 5,
      value: 'Release Date',
    },
    {
      id: 6,
      value: 'Country',
    },
    {
      id: 7,
      value: 'Genre',
    },
    {
      id: 8,
      value: 'Condition',
    },
  ];
  const orderByItems = [
    {
      id: 1,
      value: 'Ascending',
    },
    {
      id: 2,
      value: 'Descending',
    },
  ];

  return (
    <div>
      <form onSubmit={sortCollection} className='form'>
        <h1>Sort By:</h1>
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
        <Button buttonStyle='btn--success--solid'>Sort</Button>
      </form>
    </div>
  );
};

export default Sort;
