import React, { useContext, useEffect } from 'react';
import RecordCollectionRow from './RecordCollectionRow';
import RecordContext from '../../context/record/recordContext';

const RecordCollection = () => {
  const recordContext = useContext(RecordContext);

  const { getRecords, records, loading, current } = recordContext;

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line
  }, []);

  const boxes = {
    a: [],
    b: [],
    c: [],
    d: [],
    unboxed: [],
  };
  //Loop through each record and assign it a Collection Row
  //if (!loading && records !== null) {
  //create arrays of elements with boxLetter and _id
  if (records !== null && !loading) {
    records.forEach((element) => {
      if (!boxes.hasOwnProperty(element.locationPrimary)) {
        console.log(
          `${element.title}'s box (${element.locationPrimary}) does not exist`
        );
        boxes.unboxed.push(element);
      } else {
        boxes[element.locationPrimary].push(element);
      }
    });
  }

  return (
    <div className='record-collection'>
      <RecordCollectionRow boxLetters={[boxes.a, boxes.b]} />
      <RecordCollectionRow boxLetters={[boxes.c, boxes.d]} />
    </div>
  );
};

export default RecordCollection;

// const records = [
//   {
//     _id: '5f73031a32170637986a26db',
//     title: 'Black Sabbath',
//     artist: 'Black Sabath',
//     label: 'Vertigo',
//     catalogNumber: 'WS 1871',
//     releaseDate: '1970',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'NM',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '1',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601372954396' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f7303b932170637986a26dc',
//     title: 'Paranoid',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '6360 011',
//     releaseDate: '1970',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'M',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '3',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373113676' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73042532170637986a26dd',
//     title: 'Master of Reality',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '6360 050',
//     releaseDate: '1971',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'P',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '2',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373221560' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73049a32170637986a26de',
//     title: 'Vol. 4',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '6360 071',
//     releaseDate: '1972',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'nm',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '5',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373338065' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73052c32170637986a26df',
//     title: 'Sabbath Bloody Sabbath',
//     artist: 'Black Sabbath',
//     label: ' WWA Records ',
//     catalogNumber: 'WWA 005',
//     releaseDate: '1973',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'VG',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '4',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373484194' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73058232170637986a26e0',
//     title: 'Sabotage',
//     artist: 'Black Sabbath',
//     label: 'NEMS',
//     catalogNumber: '\t9119 001',
//     releaseDate: '1975',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: '',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '7',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373570092' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f7305c432170637986a26e1',
//     title: 'Technical Ecstasy',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '9102 750',
//     releaseDate: '1976',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'M',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '6',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373636936' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73061c32170637986a26e2',
//     title: 'Never Say Die!',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '9102 751',
//     releaseDate: '1978',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'G',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '9',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373724628' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73065c32170637986a26e3',
//     title: 'Heaven and Hell',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '9102 752',
//     releaseDate: '1980',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'M',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '10',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373788720' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73069c32170637986a26e4',
//     title: 'Mob Rules',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '6302 119',
//     releaseDate: '1981',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'VG',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '8',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373852440' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f7306e532170637986a26e5',
//     title: 'Born Again',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: 'VERL 8',
//     releaseDate: '1983',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'P',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '13',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373925065' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73071a32170637986a26e6',
//     title: 'Seventh Star',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: 'VERH 29',
//     releaseDate: '1986',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'VG',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '12',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601373978705' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73075932170637986a26e7',
//     title: 'The Eternal Idol',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: 'VERH 51',
//     releaseDate: '1987',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'G',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '14',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601374041372' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73079b32170637986a26e8',
//     title: 'Headless Cross',
//     artist: 'Black Sabbath',
//     label: 'I.R.S Records',
//     catalogNumber: 'EIRSA 1002',
//     releaseDate: '1989',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'G',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '11',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601374107096' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73081832170637986a26e9',
//     title: 'Tyr',
//     artist: 'Black Sabbath',
//     label: 'I.R.S. Records',
//     catalogNumber: '1C 064-24 1070',
//     releaseDate: '1990',
//     country: 'EU',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'M',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '17',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601374232166' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73082a32170637986a26ea',
//     title: 'Dehumanizer',
//     artist: 'Black Sabbath',
//     label: 'I.R.S Records',
//     catalogNumber: '713155 1',
//     releaseDate: '1992',
//     country: 'EU',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'VG+',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '18',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601374250135' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f7308f932170637986a26eb',
//     title: 'Cross Purposes',
//     artist: 'Black Sabbath',
//     label: 'I.R.S. Records',
//     catalogNumber: '0777 7 13222 1 1',
//     releaseDate: '1994',
//     country: 'UK',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'VG+',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '15',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601374457791' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f73094932170637986a26ec',
//     title: 'Forbidden',
//     artist: 'Black Sabbath',
//     label: 'I.R.S. Records',
//     catalogNumber: '830620',
//     releaseDate: '1995',
//     country: 'Brazil',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'M',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '16',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601374537518' } },
//     __v: { $numberInt: '0' },
//   },
//   {
//     _id: '5f7309bd32170637986a26ed',
//     title: '13',
//     artist: 'Black Sabbath',
//     label: 'Vertigo',
//     catalogNumber: '3734960',
//     releaseDate: '2013',
//     country: 'EU',
//     coverFront: '',
//     coverBack: '',
//     coverLp: '',
//     condition: 'M',
//     barcode: '',
//     locationPrimary: 'a',
//     locationSecondary: '19',
//     user: { $oid: '5f63110ca33ecc16f4483871' },
//     date: { $date: { $numberLong: '1601374653557' } },
//     __v: { $numberInt: '0' },
//   },
// ];
