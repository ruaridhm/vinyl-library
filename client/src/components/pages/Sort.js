import React from 'react';
import Button from '../button/Button';

const Sort = () => {
  return (
    <div>
      <form>
        <h1>Sort By:</h1>
        <select name='sort'>
          <option value='title'>Title</option>
          <option value='artist'>Artist</option>
          <option value='label'>Label</option>
          <option value='catalog-Number'>Catalog Number</option>
          <option value='release-date'>Release Date</option>
          <option value='country'>Country</option>
          <option value='genre'>Genre</option>
          <option value='condition'>Condition</option>
        </select>

        <select name='order'>
          <option value='alpha-asc'>Alphabetically Ascending</option>
          <option value='alpha-desc'>Alphabetically Descending</option>
          <option value='num-asc'>Numerically Ascending</option>
          <option value='num-desc'>Numerically Descending</option>
        </select>

        <select name='sort-type'>
          <option value='bubble'>Bubble Sort</option>
          <option value='insertion'>insertion</option>
          <option value='merge'>Merge</option>
          <option value='quick'>Quick</option>
        </select>

        <Button>Sort</Button>
      </form>
    </div>
  );
};

export default Sort;
