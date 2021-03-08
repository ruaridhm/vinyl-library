import React, { Dispatch, SetStateAction, useContext } from 'react';
import Button from '../button/Button';
import AlertContext from '../../context/alert/AlertContext';
import RecordContext from '../../context/record/RecordContext';

interface DiscogsBtnProps {
  discogsResult: any[];
  setDiscogsResult: Dispatch<SetStateAction<any[]>>;
}

const DiscogsBtn = ({ setDiscogsResult }: DiscogsBtnProps) => {
  const recordContext = useContext(RecordContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { setCurrent, current } = recordContext;

  const getData = async () => {
    if (current === null) {
      setAlert(
        'Please select a  saved record to edit to search discogs',
        'danger'
      );
      return;
    } else {
      const appkey = process.env.REACT_APP_DISCOGS_KEY;
      const appsecret = process.env.REACT_APP_DISCOGS_SECRET;

      let titleSearchParam = '';
      let artistSearchParam = '';
      let labelSearchParam = '';
      let catalogSearchParam = '';
      let releaseSearchParam = '';
      let countrySearchParam = '';
      let barcodeSearchParam = '';

      if (current.title !== '') {
        titleSearchParam = `release_title=${current.title}&`;
      }
      if (current.artist !== '') {
        artistSearchParam = `artist=${current.artist}&`;
      }
      if (current.label !== '') {
        labelSearchParam = `label=${current.label}&`;
      }
      if (current.catalogNumber !== '') {
        catalogSearchParam = `catno=${current.catalogNumber}&`;
      }
      if (current.releaseDate !== '') {
        releaseSearchParam = `year=${current.releaseDate}&`;
      }
      if (current.country !== '') {
        countrySearchParam = `country=${current.country}&`;
      }
      if (current.barcode !== '') {
        barcodeSearchParam = `barcode=${current.barcode}&`;
      }

      let discogsURLStart = 'https://api.discogs.com/database/search?';
      let discogsURLEND = `key=${appkey}&secret=${appsecret}`;

      let discogsGetURL = `${discogsURLStart}`;

      if (titleSearchParam !== '') {
        discogsGetURL += titleSearchParam;
      }
      if (artistSearchParam !== '') {
        discogsGetURL += artistSearchParam;
      }
      if (labelSearchParam !== '') {
        discogsGetURL += labelSearchParam;
      }
      if (catalogSearchParam !== '') {
        discogsGetURL += catalogSearchParam;
      }
      if (releaseSearchParam !== '') {
        discogsGetURL += releaseSearchParam;
      }
      if (countrySearchParam !== '') {
        discogsGetURL += countrySearchParam;
      }
      if (barcodeSearchParam !== '') {
        discogsGetURL += barcodeSearchParam;
      }
      console.log('pre-check');
      console.log(discogsGetURL);

      if (discogsGetURL !== 'https://api.discogs.com/database/search?') {
        discogsGetURL += 'type=release&';
      } else if (discogsGetURL === 'https://api.discogs.com/database/search?') {
        setAlert('No search parameters set', 'danger');
        return;
      }

      discogsGetURL += discogsURLEND;

      let response = await fetch(discogsGetURL);
      console.log('discogsGetURL');
      console.log(discogsGetURL);
      let json;

      response.ok
        ? // if HTTP-status is 200-299
          // get the response body (the method explained below)
          (json = await response.json())
        : alert('HTTP-Error: ' + response.status);

      //json actions

      setDiscogsResult(json.results);

      if (json.results.length === 0) {
        setAlert('No results found', 'danger');
        return;
      } else if (json.results.length === 1) {
        let titleArtistArr = json.results[0].title.split(' - ');

        let currentResult = {
          title: titleArtistArr[1],
          artist: titleArtistArr[0],
          label: json.results[0].label[0],
          catNumb: json.results[0].catno,
          releaseDate: json.results[0].year,
          country: json.results[0].country,
          coverFront: json.results[0].cover_image,
          barcode: json.results[0].barcode[0],
        };

        setCurrent({
          ...current,
          title: currentResult.title,
          artist: currentResult.artist,
          label: currentResult.label,
          catalogNumber: currentResult.catNumb,
          releaseDate: currentResult.releaseDate,
          country: currentResult.country,
          coverFront: currentResult.coverFront,
          barcode: currentResult.barcode,
        });
      }
    }
  };

  return (
    <Button
      onClick={getData}
      type='button'
      label='Fetch from Discogs'
      solidSuccess
      small
    />
  );
};

export default DiscogsBtn;
