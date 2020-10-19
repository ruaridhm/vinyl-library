import React, { useContext } from 'react';
import Button from '../button/Button';
import AlertContext from '../../context/alert/AlertContext';
import RecordContext from '../../context/record/recordContext';

const DiscogsBtn2 = () => {
  const recordContext = useContext(RecordContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { setCurrent, current } = recordContext;

  const onClick = () => {
    getData();
  };

  const getData = async () => {
    if (current === null) {
      setAlert('Please select a record to edit to search discogs', 'danger');
      return;
    } else {
      let appkey = 'NDojcxfzXQKCDcJbMYiA';
      let appsecret = 'OVhZRVYcvQiaQSrIlqQqFDqXzENIDEJF';

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
      if (current.catNumb !== '') {
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

      console.log({ titleSearchParam });

      if (titleSearchParam !== '') {
        discogsGetURL += titleSearchParam;
      }
      if (artistSearchParam !== '') {
        discogsGetURL += artistSearchParam;
      }
      if (labelSearchParam !== '') {
        discogsGetURL += labelSearchParam;
      }
      // if (catalogSearchParam !== '') {
      //   discogsGetURL += catalogSearchParam;
      // }
      if (releaseSearchParam !== '') {
        discogsGetURL += releaseSearchParam;
      }
      if (countrySearchParam !== '') {
        discogsGetURL += countrySearchParam;
      }
      if (barcodeSearchParam !== '') {
        discogsGetURL += barcodeSearchParam;
      }

      discogsGetURL += discogsURLEND;

      console.log({ discogsGetURL });

      let discogsGetURL2 = `https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&key=${appkey}&secret=${appsecret}`;
      console.log({ discogsGetURL2 });
      let response = await fetch(discogsGetURL);
      let json;

      if (response.ok) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        json = await response.json();
      } else {
        alert('HTTP-Error: ' + response.status);
      }
      //json actions
      console.log(json);

      if (json.results.length === 0) {
        setAlert('No results found', 'danger');
        return;
      } else {
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
    <Button onClick={onClick} type='button' buttonStyle='btn--success--solid'>
      Discogs
    </Button>
  );
};

export default DiscogsBtn2;
