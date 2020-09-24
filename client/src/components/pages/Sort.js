import React, { useState, useContext, useEffect } from 'react';
import Button from '../button/Button';
import Dropdown from '../dropdown/Dropdown';
import AuthContext from '../../context/auth/AuthContext';

const Sort = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const [sortBy, setSortBy] = useState([]);
  const [orderBy, setOrderBy] = useState([]);
  const [sortType, setSortType] = useState([]);

  const sortCollection = (e) => {
    e.preventDefault();
    console.log(
      ` Sort by: ${sortBy[0].value}, ${orderBy[0].value} with ${sortType[0].value}`
    );
  };

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
      value: 'Alphabetically Ascending',
    },
    {
      id: 2,
      value: 'Alphabetically Descending',
    },
    {
      id: 3,
      value: 'Numerically Ascending',
    },
    {
      id: 4,
      value: 'Numerically Descending',
    },
  ];
  const sortTypeItems = [
    {
      id: 1,
      value: 'Bubble Sort',
    },
    {
      id: 2,
      value: 'Insertion',
    },
    {
      id: 3,
      value: 'Merge Sort',
    },
    {
      id: 4,
      value: 'Quick Sort',
    },
  ];

  return (
    <div>
      <form onSubmit={sortCollection} className='form'>
        <h1>Sort By:</h1>
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
          title='Sort Type:'
          items={sortTypeItems}
          selection={sortType}
          setSelection={setSortType}
        />

        <Button buttonStyle='btn--success--solid'>Sort</Button>
      </form>
    </div>
  );
};

export default Sort;
